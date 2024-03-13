class TransactionsController < ApplicationController
    before_action :set_user

    def show
    end

    def index
    end


    private

    def set_user
        @user = current_user
    end
end
