class ContactEmailer < ActiveRecord::Base
  attr_accessible :message, :name, :subject, :email
  validates_presence_of :name, :email, :message

end
