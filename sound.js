const audioCtx =  new (window.AudioContext || window.webkitAudioContext)();


function playSound(frequency = 400, duration = 2){
    const osc = audioCtx.createOscillator();
    const envelope = audioCtx.createGain()
    envelope.connect(audioCtx.destination);
    osc.connect(envelope);

    envelope.gain.setValueAtTime(0, audioCtx.currentTime);

    envelope.gain.linearRampToValueAtTime(0.05, audioCtx.currentTime + 0.05);
    envelope.gain.linearRampToValueAtTime(0, audioCtx.currentTime + duration);

    osc.frequency.setValueAtTime(frequency, audioCtx.currentTime);
    osc.start();
    osc.stop(audioCtx.currentTime + duration)

}