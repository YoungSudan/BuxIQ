class DashboardController < ApplicationController
    before_action :authenticate_user!

    def show
        @user = current_user
        @accounts = current_user.accounts
    end 

end
