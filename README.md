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
6. Store
   1. create store folder
   2. create highcharts-store.js file
7. Connect Redux store to React
   1. import Provider
   2. import HighChartsSeries from './store/highcharts-store'
8. Daily stocks component
   1. create stock folder
   2. create DailyStocks component
   3. create Lazy Loading DailyStocks
   4. add DailyStocks Route
9. Weekly Stocks Component
   1. create WeeklyStocks Component
   2. create Lazy Loading WeeklyStocks
   3. add WeeklyStocks Route
10. Monthly Stocks Component
    1. create MonthlyStocks Component
    2. create Lazy Loading MonthlyStocks
    3. add MonthlyStocks Route
11. Monthly stocks Comparison Component
    1. create MonthlyStocksComparison
    2. create Lazy loading MonthlyStocksComparison
    3. add MonthlyStocksComparison Route
