/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @return {boolean}
 */
var canAttendMeetings = function(intervals) {
    if (intervals.length === 0) return true;
    intervals.sort((a,b) => {
        return a.start === b.start ? a.end - b.end : a.start - b.start;
    });
    for (let i = 0; i < intervals.length - 1; i++) {
        if (intervals[i].end > intervals[i+1].start) return false;
    }
    return true;
};