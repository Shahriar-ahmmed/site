class CreateContactEmailers < ActiveRecord::Migration
  def change
    create_table :contact_emailers do |t|
      t.string  :name
      t.string :email
      t.string :subject
      t.text :message
      t.timestamps
    end
  end
end