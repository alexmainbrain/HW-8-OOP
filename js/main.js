class Timer {
    constructor(time, auto) {
        this.auto = auto;
        this.time = time;
        this.render();
        this.timer.textContent = `${this.time}`;
        if (this.auto == true) {
            window.onload = () => {
                this.timer0();
                this.decreaseProgressLine();
            }
        }
    }

    timer1 () {
        this.button.addEventListener("click", () => {
            if (this.button.textContent == "Stop") {
                this.button.textContent = "Start";
                clearInterval(this.interval);
                clearInterval(this.progressInterval);
            }
            else if (this.button.textContent == "Start") {
                this.button.textContent = "Stop";
                this.timer0();
                this.decreaseProgressLine();
                
            }
        })
    }

    timer2() {
        this.progress = document.createElement("div")
        this.container.append(this.progress)
    }

    progressLine() {
        this.progress = document.createElement("div")
        this.progress.classList.add("progress")
        this.container.append(this.progress)
        this.progressWidth = "100";
        this.progressHeight = "10";
    }

    timer0 () {
        this.interval = setInterval( () => {
            if (parseFloat(this.timer.textContent) !==0) {
                this.timer.textContent --;
            }
            else if(parseFloat(this.timer.textContent) === 0) {
                clearInterval(this.interval);
            }
        }, 1000);
    }

     decreaseProgressLine () {
            this.progressInterval = setInterval(() => {
                this.currentWidth = parseFloat(this.progress.style.width);
                return this.progress.style.width = `${this.currentWidth - `${this.progressWidth / this.time}`}%`
                if (parseFloat(this.progress.style.width) === 0) {
                    clearInterval(this.progressInterval)
                }
            }, 1000)
    }

    render() {
        this.container = document.querySelector(".container");
        this.timer = document.createElement("div");
        this.timer.classList.add("timer");
        this.container.append(this.timer);
        this.button = document.createElement("button");
        this.button.classList.add("button");
        this.button.textContent = "Start";
        this.container.append (this.button);
        this.timer1();
        this.timer2();
        this.progressLine(); this.progress.style.width = `${this.progressWidth}%`;
        this.progress.style.height = `${this.progressHeight}px`;
        this.progress.style.backgroundColor = "yellow";
    }
}


class autoTimer extends Timer{
    constructor (time, auto) {
        super(time, auto)
    }
    render() {
        super.render();
        this.button.textContent ="Stop"
    }
}

const button1 = new Timer(10, false)
const button2 = new  autoTimer(30, true)