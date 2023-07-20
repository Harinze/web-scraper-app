import axios, * as others from 'axios';
import  cheerio  from 'cheerio';
import express from 'express'
import dotenv from 'dotenv';

dotenv.config()

const app = express()



const url = 'https://www.premiumtimesng.com/'

try{
    axios(url).then(response => {
        const urlData = response.data;
        const $ = cheerio.load(urlData)
    
         const pageInfo = [];
    
        $('.jeg_post_title', urlData).each(function() {
            const title = $(this).text()
            const url = $(this).find('a').attr('href')
    
            pageInfo.push({
                title,
                url
            })
        })
        console.log(pageInfo)
    })
}
catch(err){console.log(err)}



app.listen(process.env.PORT, () => console.log(`server running on PORT ${process.env.PORT}`))