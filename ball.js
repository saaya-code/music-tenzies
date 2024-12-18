class Ball{
    constructor(track, radius, speed, frequency){
        this.track = track;
        this.radius = radius;
        this.speed = speed;
        this.offset = 0;
        this.center = this.track.getPosition(this.offset);
        this.direction = 1;
        this.frequency = frequency;
    }
    draw(ctx){
        ctx.beginPath();
        ctx.arc(this.center.x, this.center.y, this.radius, 0, Math.PI * 2);
        ctx.strokeStyle = "white";
        ctx.stroke();
    }
    move(){
        this.offset += this.speed * this.direction;
        this.center = this.track.getPosition(this.offset)
        if(this.center.y > this.track.center.y){
            this.direction *= -1;
            playSound(this.frequency);
        }
    }
}