function call_odin_bundle(Odin, pars, tStart, tEnd, nPoints, control) {
    var solution = wodinRunner(dopri.Dopri, Odin, pars, tStart, tEnd, control);
    return solution(tStart, tEnd, nPoints);
}
