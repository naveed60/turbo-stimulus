class Employee < ApplicationRecord
  validates :name, :email, :contact_number, :city,  presence: true
end
