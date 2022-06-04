/// evaluating required run rate and current run rate
/// sample input: [300,294,6] output: cr: 6.00 rr: 7.00


function cricInfo(target,runs,balls) {
    target = target + 1;
    let remaining_run = target - runs;
    let current_rr = (runs / (300 - balls)) * 6;
    let required_rr = (remaining_run/balls) * 6;
    current_rr = current_rr.toPrecision(3);
    required_rr = required_rr.toPrecision(3);
    console.log("current run rate: " + current_rr);
    console.log("required run rate: " + required_rr);
}

cricInfo(300,294,6);
cricInfo(324,280,30);