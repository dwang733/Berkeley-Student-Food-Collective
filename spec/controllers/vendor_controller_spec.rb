require 'rails_helper'
#require_relative '../../app/controllers/vendors_controller.rb'
require 'helper'

describe VendorsController do
	describe "New Vendor Page" do
		it "should show the new page" do
			get :new
			expect(response).to render_template("new")
		end
	end

	describe "Add Vendor without Tags Action" do
		it "should add a new vendor" do 
			#@model_params = ActionController::Parameters.new(vendor: {:name => "Test Vendor", :description => "Test Description"})
			#					.require(:vendor).permit(:name, :description, :address, :facebook, :twitter, :instagram)
			@model_params = create_new_vendor({:name => "Test Vendor", :description => "Test Description"})
			@new_vendor = instance_double("Vendor", :name => "Test Vendor", :description => "Test Description")
			expect(Vendor).to receive(:create!).with(@model_params).and_return(@new_vendor)
			post :create, params: {vendor: {:name => "Test Vendor", :description => "Test Description"}}

			expect(response).to redirect_to(vendors_path)
		end
		it "vendor was added to the database" do
			expect(Vendor.all.length == 0)
            vendor = FactoryBot.build(:vendor)
            post :create, :params => {:vendor => vendor.attributes}
            expect(Vendor.all.length == 1)
		end
		
	end

	
end