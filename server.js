var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articleOne={
    title: 'Article One|Kiriti',
    heading: 'Article One',
    date:'Sept 5,2016',
    content:`<div>
                <p>
                    This is the content of second page
                </p>
                <p>
                    This is second line
                </p>
            </div>`
    };

function createTemplate(data){
        var title = data.title;
        var heading = data.heading;
        var date = data.date;
        var content = data.content;
        var htmlTemlpate=`
                            <html>
                            <head>
                                <title>
                                    ${title}
                                </title>
                                <meta name="viewport" content= "width=device-width,intial-scale-1"/>
                                <link href="/ui/style.css" rel="stylesheet" />
                            </head>
                            
                            <body>
                                <div class= container>
                                    <hr/>
                                    <h3>
                                       ${heading}
                                    </h3>
                                    <div>
                                       ${date}
                                    </div>
                                    <div>
                                       ${content}
                                    </div>
                                </div>    
                            </body>
                            </html>`;
        return htmlTemplate;
        }


app.get('/', function (req, res) {
  res.send(createTemplate(articleOne));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/article-one',function(req,res) {
 res.sendFile(path.join(__dirname, 'ui', 'Article-one.html'));
});

app.get('/article-two',function(req,res) {
 res.sendFile(path.join(__dirname, 'ui', 'Article-two.html'));
});

app.get('/article-three',function(req,res) {
 res.sendFile(path.join(__dirname, 'ui', 'Article-three.html'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
