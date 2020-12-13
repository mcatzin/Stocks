1. Installation and starter boilerplate
   1. install all devDependencies and dependencies
   2. create webpack config files
   3. create .babelrc file
   4. create index.html
   5. create vendor.json file
   6. crate src/main.js
   7. create App.js file
   8. create MainLayout.js file
   9. create HighCharts.js file
   10. create DashboardHome.js file
2. APIs
   1. register for free Alpha Vantage API key
3. install HighCharts
   1. npm install --save highcharts highcharts-react-official
   2. add import 'highcharts' to vendor.js file
   3. add import 'highcharts-react-official' to vendor.js file
4. Actions
   1. create the action types
   2. create getDailyStocksTimeSeries action
   3. creat getWeeklyStocksTimeSeries action
   4. create getMonthlyStocksTimeSeries action
   5. create getMonthlyStocksForComparison action
5. Reducer
   1. create a reducer folder and stock-reducers.js file
   2. create STOCK_TIME_SERIES_DAILY, STOCK_TIME_SERIES_WEEKLY, STOCK_TIME_SERIES_MONTHLY MULTIPLE_STOCKS_SERIES_MONTHLY reducers
   3. create reducers.js file