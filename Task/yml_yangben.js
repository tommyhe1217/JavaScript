/*ziye

具体方法请看: https://help.github.com/actions/language-and-framework-guides/using-nodejs-with-github-actions


github地址 https://github.com/ziye66666
TG频道地址  https://t.me/ziyescript
TG交流群   https://t.me/joinchat/AAAAAE7XHm-q1-7Np-tF3g
boxjs链接  https://raw.githubusercontent.com/ziye66666/JavaScript/main/Task/ziye.boxjs.json



⚠️⚠️⚠️特别重要,务必进行替换操作，不得使用原作者地址

 以账号ABC  
 仓库地址 https://github.com/ABC/JavaScript   
 文件地址   https://raw.githubusercontent.com/ABC/JavaScript/main/Task/xiaole.js    为例 


主要替换的字符👇


小乐        //js名字
0 0-15    //定时，如北京时间8到23点，设置0-15
XL_URL    //环境变量之一，45行处自行添加其他
ABC        //账号名
JavaScript       //仓库名
Task/xiaole.js    //子文件地址


*/

name: 小乐

on:
  workflow_dispatch:
  schedule:
     - cron: '0 0-15 * * *'
  watch:
    types: started
jobs:
  build:
    runs-on: ubuntu-latest
    if: github.event.repository.owner.id == github.event.sender.id
    env:
        XL_URL: ${{ secrets.XL_URL }}
        XL_HEADER: ${{ secrets.XL_HEADER }}		
        
    steps:
      - name: Checkout
        run: |
          git clone https://github.com/ABC/JavaScript.git ~/JavaScript
      - name: Use Node.js 12.x
        uses: actions/setup-node@v1
        with:
          node-version: 12.x
      - name: npm install
        if: env.XL_URL
        run: |
          cd ~/JavaScript
          npm install
      - name: '运行 【小乐】'
        if: env.XL_URL
        run: |
          cd ~/JavaScript
          node Task/xiaole.js
        env:
          
          PUSH_KEY: ${{ secrets.PUSH_KEY }}
          BARK_PUSH: ${{ secrets.BARK_PUSH }}
          TG_BOT_TOKEN: ${{ secrets.TG_BOT_TOKEN }}
          TG_USER_ID: ${{ secrets.TG_USER_ID }}
          BARK_SOUND: ${{ secrets.BARK_SOUND }}
          DD_BOT_TOKEN: ${{ secrets.DD_BOT_TOKEN }}
          DD_BOT_SECRET: ${{ secrets.DD_BOT_SECRET }}

    
