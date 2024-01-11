class TransactionController < ApplicationController
    def  index
        @transactions = current_user.transactions
    end
end
