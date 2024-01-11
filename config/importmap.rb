# Pin npm packages by running ./bin/importmap
pin "@hotwired/turbo-rails", to: "turbo.min.js", preload: true
pin "@hotwired/stimulus", to: "stimulus.min.js"
pin "@hotwired/stimulus-loading", to: "stimulus-loading.js"
pin_all_from "app/javascript/controllers", under: "controllers"

pin "application"
pin "plaid" # @18.2.0
pin "axios" # @1.6.5
pin "buffer" # @2.0.1pin "flowbite" # @2.2.1
pin "@popperjs/core", to: "@popperjs--core.js" # @2.11.8
pin "apexcharts" # @3.45.1
pin "flowbite/plugin", to: "flowbite--plugin.js" # @2.2.1
pin "mini-svg-data-uri" # @1.4.4
pin "picocolors" # @1.0.0
pin "tailwindcss/colors", to: "tailwindcss--colors.js" # @3.4.1
pin "tailwindcss/defaultTheme", to: "tailwindcss--defaultTheme.js" # @3.4.1
pin "tailwindcss/plugin", to: "tailwindcss--plugin.js" # @3.4.1
