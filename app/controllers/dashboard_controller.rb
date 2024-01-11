class DashboardController < ApplicationController
    before_action :authenticate_user!

    def show
        @transactions = current_user.transactions
    end 

end
