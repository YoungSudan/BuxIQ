class AccountsController < ApplicationController
    def index
        @user = current_user
    end

    def test
        render json: {money: 100}
    end
end
