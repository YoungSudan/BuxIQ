# Pin npm packages by running ./bin/importmap
pin "@hotwired/turbo-rails", to: "turbo.min.js", preload: true
pin "@hotwired/stimulus", to: "stimulus.min.js"
pin "@hotwired/stimulus-loading", to: "stimulus-loading.js"
pin_all_from "app/javascript/controllers", under: "controllers"

pin "application"
pin "plaid" # @18.2.0
pin "axios" # @1.6.5
pin "buffer" # @2.0.1
