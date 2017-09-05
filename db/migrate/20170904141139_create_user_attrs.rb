class CreateUserAttrs < ActiveRecord::Migration[5.1]
  def change
    create_table :user_attrs do |t|
      t.string :key
      t.text :value
      t.references :user, foreign_key: true

      t.timestamps
    end
    add_index :user_attrs, :key
  end
end
