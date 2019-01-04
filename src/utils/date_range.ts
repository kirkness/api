import moment from 'moment';

/**
 * Return date range object for mongo find query
 * @param {Object} query Koa querystring object from ctx.request
 * @return {Object} Mongo compatible date range query object
 */

export default q => {
  let start;
  let end;
  // See if date is unix, if so, add miliseconds
  if (/^[0-9]*$/.test(q.start && (q.final || q.end))) {
    start = moment.utc(q.start * 1000);
    end = moment.utc(q.final * 1000 || q.end * 1000);
  } else {
    start = moment.utc(q.start);
    end = moment.utc(q.final || q.end);
  }

  return { $gte: start.toISOString(), $lte: end.toISOString() };
};