function Timer(callback, timeInterval, options){
    this.timeInterval = timeInterval;

    this.start = () => {
        this.expected = Date.now() + this.timeInterval;
        this.theTimeout = null;

        if (options.i)
    }
}