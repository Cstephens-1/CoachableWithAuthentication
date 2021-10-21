class UserWorkoutsController < ApplicationController
    skip_before_action :confirm_authentication
end
