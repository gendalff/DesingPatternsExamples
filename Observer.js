//object
var Weather = function() {
    this.temp = 0;
    this.humidity = 80;
    this.view = 'sunny';
    this.subscribers = [];
    this.update = function(data) {
            console.log("Weather data updates");
            if (data.temp) this.temp = data.temp;
            if (data.humidity) this.humidity = data.humidity;
            if (data.view) this.view = data.view;
            this.notifyObservers();
        }
        //broadcasting "ONE TO MANY"
    this.notifyObservers = function() {
        for (var i = 0; i < this.subscribers.length; i++) {
            this.subscribers[i].update(this.temp, this.humidity, this.view);
        }
    }

    this.subscribe = function(subscriber) {
        if (subscriber.update) {
            this.subscribers.push(subscriber);
            console.log(subscriber.name + " subscribed.");
        } else {
            console.log("Can't subscribe! Method 'update(t,h,v) must be implemented!'");
        }
    }

    this.unsubscribe = function(subscriber) {
        var i = this.subscribers.indexOf(subscriber);
        if (i !== -1) {
            console.log(this.subscribers[i].name + " is being removed from subscription.");
            this.subscribers.splice(i, 1);
        }
    }
}

//observer
var DisplayService = function(name) {
        this.name = name;
        this.update = function(t, h, v) {
            console.log(name + " says: temp = " + t + ", humidity = " + h + " and it is " + v + "! Have a nice day and watch " + this.name + " :)");
        }
    }
    //bad observer
var DisplayServiceWrong = function(name) {
        this.name = name;
        this.up = function(t, h, v) {
            console.log("temp = " + t + ", hum = " + h + " and it is " + v + "!");
        }
    }
    //another observer
var DisplayServiceUA = function(name) {
    this.name = name;
    this.update = function(t, h, v) {
        console.log(name + " говорить: температура = " + t + ", вологiсть = " + h + " i зараз " + v + "! Доброго дня i дивiться " + this.name + " :)");
    }
}

//run
var weather = new Weather();
var zdf = new DisplayService("ZDF");
var opo = new DisplayServiceUA("1+1");
var bbc = new DisplayService("BBC");
var cnn = new DisplayService("CNN");
var bad = new DisplayServiceWrong("bad");

weather.subscribe(zdf);
weather.subscribe(opo);
weather.subscribe(cnn);
weather.update({
    temp: 23
});
weather.unsubscribe(zdf);
weather.update({
    humidity: 100
});
weather.subscribe(bbc);
weather.subscribe(bad);
weather.update({
    view: "raining"
});