json.extract! employee, :id, :name, :email, :city, :contact_number, :created_at, :updated_at
json.url employee_url(employee, format: :json)
