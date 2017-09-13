class AuthenticateUser
  def initialize(email_or_token, password = nil)
    if password.nil?
      @auth_token = email_or_token
    else
      @email = email_or_token
      @password = password
    end
  end

  # Service entry point
  def call
    JsonWebToken.encode(user_id: user.id) if user
  end

  # Validate existing token '/api/auth/verify'
  # or allow error return
  def validate
    refresh_token
  end

  private

  attr_reader :email, :password, :auth_token

  # verify user credentials
  def user
    user = User.find_by(email: email)
    return user if user && user.authenticate(password)
    # raise Authentication error if credentials are invalid
    raise(ExceptionHandler::AuthenticationError, Message.invalid_credentials)
  end

  def refresh_token
    payload = JsonWebToken.decode(auth_token)
    JsonWebToken.encode payload, payload['exp'] + 1 unless payload.nil?
  rescue JWT::DecodeError
    raise(ExceptionHandler::InvalidToken, Message.invalid_token)
  end
end