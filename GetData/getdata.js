var page = require('webpage').create;
var fs = require('fs');
page.open('https://movan.vn/rest-api-gioi-thieu-rest-api/',()=> {
    page.evaluate();
    fs.write('mySaveFile.html', page.content, 'w');
    phantom.exit();
});

public static void main(String[] args) throws Exception {
    String url = "thePathToYourSavedFile.html";

    Document document = Jsoup.connect(url).userAgent("Mozilla").get();

    Elements spanList= document.select("span");

   for (Element span: spanList) {
       if(span.attr("class").equals("my class")){
           String data = span.attr("data");
           System.out.println("data : "+data);             
       }
    }       
}