function zip(x, y) {
  return x.map((xx, i) => [xx, y[i]]);
}

var timestamps = [
  "3:00:00",
  "3:05:00",
  "3:10:00",
  "3:15:00",
  "3:20:00",
  "3:25:00",
  "3:30:00",
  "3:35:00",
  "3:40:00",
  "3:45:00",
  "3:50:00",
  "3:55:00",
  "4:00:00",
  "4:05:00",
  "4:10:00",
  "4:15:00",
  "4:20:00",
  "4:25:00",
  "4:30:00",
  "4:35:00",
  "4:40:00",
  "4:45:00",
  "4:50:00",
  "4:55:00",
  "5:00:00",
  "5:05:00",
  "5:10:00",
  "5:15:00",
  "5:20:00",
  "5:25:00",
  "5:30:00",
  "5:35:00",
  "5:40:00",
  "5:45:00",
  "5:50:00",
  "5:55:00",
  "6:00:00",
  "6:05:00",
  "6:10:00",
  "6:15:00",
  "6:20:00",
  "6:25:00",
  "6:30:00",
  "6:35:00",
  "6:40:00",
  "6:45:00",
  "6:50:00",
  "6:55:00",
  "7:00:00",
  "7:05:00",
  "7:10:00",
  "7:15:00",
  "7:20:00",
  "7:25:00",
  "7:30:00",
  "7:35:00",
  "7:40:00",
  "7:45:00",
  "7:50:00",
  "7:55:00",
  "8:00:00",
  "8:05:00",
  "8:10:00",
  "8:15:00",
  "8:20:00",
  "8:25:00",
  "8:30:00",
  "8:35:00",
  "8:40:00",
  "8:45:00",
  "8:50:00",
  "8:55:00",
  "9:00:00",
  "9:05:00",
  "9:10:00",
  "9:15:00",
  "9:20:00",
  "9:25:00",
  "9:30:00",
  "9:35:00",
  "9:40:00",
  "9:45:00",
  "9:50:00",
  "9:55:00",
  "10:00:00",
  "10:05:00",
  "10:10:00",
  "10:15:00",
  "10:20:00",
  "10:25:00",
  "10:30:00",
  "10:35:00",
  "10:40:00",
  "10:45:00",
  "10:50:00",
  "10:55:00",
  "11:00:00",
  "11:05:00",
  "11:10:00",
  "11:15:00",
  "11:20:00",
  "11:25:00",
  "11:30:00",
  "11:35:00",
  "11:40:00",
  "11:45:00",
  "11:50:00",
  "11:55:00",
  "12:00:00",
  "12:05:00",
  "12:10:00",
  "12:15:00",
  "12:20:00",
  "12:25:00",
  "12:30:00",
  "12:35:00",
  "12:40:00",
  "12:45:00",
  "12:50:00",
  "12:55:00",
  "13:00:00",
  "13:05:00",
  "13:10:00",
  "13:15:00",
  "13:20:00",
  "13:25:00",
  "13:30:00",
  "13:35:00",
  "13:40:00",
  "13:45:00",
  "13:50:00",
  "13:55:00",
  "14:00:00",
  "14:05:00",
  "14:10:00",
  "14:15:00",
  "14:20:00",
  "14:25:00",
  "14:30:00",
  "14:35:00",
  "14:40:00",
  "14:45:00",
  "14:50:00",
  "14:55:00"
];

var visitors = [
1000,
965.4893846,
932.1697518,
900,
868.9404461,
838.9527766,
810,
782.0464015,
755.0574989,
729,
703.8417614,
679.5517491,
656.1,
623.7485482,
592.9923051,
563.752613,
574.809393,
586.0830276,
597.57777,
613.1061676,
629.0380794,
645.383991,
666.2170607,
687.7226243,
709.92239,
737.2535646,
765.6369572,
795.113077,
830.6100471,
867.6917413,
906.428908,
952.4007827,
1000.704239,
1051.45753,
1111.098101,
1174.121592,
1240.71989,
1303.646193,
1369.763965,
1439.23507,
1503.488175,
1570.609791,
1640.72798,
1703.894073,
1769.491985,
1837.61534,
1896.933774,
1958.167014,
2021.37687,
2073.903496,
2127.795057,
2183.08702,
2225.903518,
2269.559768,
2314.07224,
2344.524051,
2375.37659,
2406.63513,
2422.573578,
2438.617582,
2454.76784,
2487.07112,
2519.799492,
2552.95855,
2603.029272,
2654.082022,
2706.13606,
2732.931232,
2759.991719,
2787.32015,
2787.32015,
2787.32015,
2787.32015,
2768.612737,
2750.030882,
2731.57374,
2713.24048,
2695.030265,
2676.94227,
2658.975672,
2641.129658,
2623.40342,
2605.796155,
2588.307062,
2570.93535,
2553.680233,
2536.540925,
2519.51665,
2502.60663,
2485.810104,
2469.12631,
2452.554495,
2436.093904,
2419.74379,
2403.503408,
2387.372025,
2371.34891,
2355.433336,
2339.624582,
2323.92193,
2308.324668,
2292.832089,
2277.44349,
2262.158174,
2246.975447,
2231.89462,
2216.915011,
2202.035939,
2187.25673,
2172.576714,
2157.995224,
2143.5116,
2129.125183,
2114.835323,
2100.64137,
2086.54268,
2072.538615,
2058.62854,
2044.811825,
2031.087842,
2017.45597,
2003.915589,
1990.466086,
1977.10685,
1761.401958,
1569.230746,
1398.02566,
1324.391336,
1254.635348,
1188.553424,
1156.252482,
1124.829373,
1094.26024,
1080.672126,
1067.252745,
1054,
1047.290716,
1040.62414,
1034,
1027.964843,
1021.964912,
1016,
1008,
1004,

]

// 'Raw Visitors'!B5:
var conversionRate = visitors.map(x => (Math.abs(50 - Math.sqrt(x)) + 15) / 10);

var actualVisitors = visitors.map(x => Math.floor((x + Math.floor(Math.random() * (Math.sqrt(x) / 2))) / 10 + 0.5));

var conversionsTimesVisitors = zip(conversionRate, actualVisitors).map(x => x[0] * x[1]);

var dynamicPrice = [
  96.85,
  96.85,
  96.85,
  96.85,
  96.85,
  96.85,
  96.85,
  96.85,
  96.85,
  96.85,
  96.85,
  96.85,
  96.85,
  96.85,
  96.85,
  96.85,
  96.85,
  96.85,
  96.85,
  96.85,
  96.85,
  96.85,
  96.85,
  96.85,
  96.85,
  96.85,
  96.85,
  96.85,
  96.85,
  96.85,
  96.85,
  96.85,
  96.85,
  96.85,
  96.85,
  96.85,
  96.85,
  96.85,
  96.85,
  96.85,
  96.85,
  96.85,
  100.55,
  100.55,
  100.55,
  100.55,
  100.55,
  100.55,
  100.55,
  102.55,
  102.55,
  102.55,
  103.55,
  103.55,
  103.55,
  103.55,
  103.55,
  103.55,
  103.55,
  103.55,
  103.55,
  103.55,
  103.55,
  103.55,
  103.55,
  103.55,
  103.55,
  103.55,
  103.55,
  103.55,
  103.55,
  103.55,
  103.55,
  103.55,
  103.55,
  103.55,
  103.55,
  103.55,
  103.55,
  103.55,
  103.55,
  103.55,
  103.55,
  103.55,
  103.55,
  103.55,
  103.55,
  103.55,
  104.55,
  103.55,
  103.55,
  103.55,
  103.55,
  103.55,
  103.55,
  103.55,
  103.55,
  103.55,
  103.55,
  103.55,
  103.55,
  103.55,
  103.55,
  103.55,
  103.55,
  103.55,
  103.55,
  102.55,
  102.55,
  102.55,
  102.55,
  102.55,
  102.55,
  102.55,
  102.55,
  102.55,
  102.55,
  102.55,
  102.55,
  102.55,
  100.55,
  100.55,
  100.55,
  100.55,
  100.55,
  96.55,
  96.55,
  96.55,
  96.55,
  96.55,
  96.55,
  96.55,
  96.55,
  96.55,
  96.55,
  96.55,
  96.55,
  96.55,
  96.55,
  96.55,
  96.55,
  96.55,
  96.55,
  96.55
];

var revenue = actualVisitors.map((x, i) => (Math.floor(x * conversionRate[i] + 0.5) * dynamicPrice[i]) / 100);

var initialStaticPrice = 95;

function conversionRateWithStaticPrice(staticPrice) {
  return dynamicPrice.map((x, i) => (staticPrice < x) ?
                          conversionRate[i] * Math.sqrt(x - staticPrice) / x + conversionRate[i] :
                          (-conversionRate[i]) * (Math.pow((staticPrice - x), 1.5)) / x + conversionRate[i]
                         );
}

function revenueWithStaticPrice(staticPrice) {
  return conversionRateWithStaticPrice(staticPrice).map((x, i) => Math.floor(actualVisitors[i] * x + 0.5) * staticPrice / 100);
}