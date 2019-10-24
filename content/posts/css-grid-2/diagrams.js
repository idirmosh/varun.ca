const gridAreaDefine = `                                +-- grid-column-start
                                |
             +-- grid-column +--+
             |                  |
             |                  +-- grid-column-end
grid-area +--+
             |                  +-- grid-row-start
             |                  |
             +-- grid-row +-----+
                                |
                                +-- grid-row-end`;
const namedGridAreas = `Named Areas


+-----------------------+
|░░░░░░░░░░░░░░░░░░░░░░░|
|░░░░░░░ Header ░░░░░░░░|
|░░░░░░░░░░░░░░░░░░░░░░░|
+---------------+-------+
|▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓|░░░░░░░|
|▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓|░░░A░░░|
|▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓|░░░s░░░|
|▓▓▓ Content ▓▓▓|░░░i░░░|
|▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓|░░░d░░░|
|▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓|░░░e░░░|
|▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓|░░░░░░░|
+---------------+-------+
|░░░░░░░░░░░░░░░░░░░░░░░|
|░░░░░░░ Footer ░░░░░░░░|
|░░░░░░░░░░░░░░░░░░░░░░░|
+-----------------------+`;

const magazineLayoutLg = `Large-Breakpoint
  min-width: 60em



+----+ +------------------+ +-----------+
|meta| | title            | | copy2     |
|    | |                  | |           |
+----+ +------------------+ +-----------+
+-------------------------+ +-----------+
| copy1                   | | copy2     |
|                         | |           |
+-------------------------+ +-----------+
+-------------------------+ +-----------+
|  copy1                  | | copy2     |
|                         | |           |
+-------------------------+ +-----------+
+---------------------------------------+
| media                                 |
|                                       |
+---------------------------------------+
+-----------+ +-------------------------+
|  aside    | | copy3                   |
|           | |                         |
+-----------+ +-------------------------+`;

const magazineLayoutMd = `Medium-Breakpoint
  min-width: 30em
  and max-width: 60em


+-----+ +-------------------+
|meta | | title             |
|     | |                   |
+-----+ +-------------------+
+---------------------------+
| copy1                     |
|                           |
+---------------------------+
+---------------------------+
| copy2                     |
|                           |
+---------------------------+
+---------------------------+
| media                     |
|                           |
+---------------------------+
+---------------------------+
| aside                     |
|                           |
+---------------------------+
+---------------------------+
| copy3                     |
|                           |
+---------------------------+`;

const magazineLayoutSm = `Small-Breakpoint
  min-width: 60em



+---------------+
| title         |
|               |
+---------------+
+---------------+
| meta          |
|               |
+---------------+
+---------------+
| copy1         |
|               |
+---------------+
+---------------+
| copy2         |
|               |
+---------------+
+---------------+
| media         |
|               |
+---------------+
+---------------+
| aside         |
|               |
+---------------+
+---------------+
| copy3         |
|               |
+---------------+`;

const bbcSportLive = `+-------------------------------------+
|              Navigation             |
+-------------------------------------+
|             Match Score             |
+-------------------------------------+
|                                     |
|               Media                 |
|                                     |
+--+------+-+-------------+-+------+--+
|  |  su  | |             | |      |  |
|  |  mm  | |             | |      |  |
|  |  ar  | |   Live      | | stats|  |
|  |  y   | |   Reporting | |      |  |
|  +------+ |             | +------+  |
|           |             | |      |  |
|           |             | | line |  |
|           |             | | -ups |  |
|           |             | |      |  |
|           |             | |      |  |
|           |             | |      |  |
+-------------------------------------+`;

const bbcSportLiveTabs = `+-------------------------------------+
|              Navigation             |
+-------------------------------------+
|             Match Score             |
+-------------------------------------+
|                                     |
|               Media                 |
|                                     |
+--+------+-+---+---+---+----------+--+
|  |  su  | |   |   |   |          |  |
|  |  mm  | +---+---+---+----------+  |
|  |  ar  | |                      |  |
|  |  y   | |                      |  |
|  +------+ |                      |  |
|           |                      |  |
|           |          Tabs!       |  |
|           |                      |  |
|           |                      |  |
|           |                      |  |
|           |                      |  |
+-------------------------------------+`;

export default {
  gridAreaDefine,
  namedGridAreas,
  magazineLayoutLg,
  magazineLayoutMd,
  magazineLayoutSm,
  bbcSportLive,
  bbcSportLiveTabs,
};
