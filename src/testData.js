const data = [
  {
    $type: "Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities",
    id: "bakerloo",
    name: "Bakerloo",
    modeName: "tube",
    disruptions: [],
    created: "2020-04-08T11:38:13.957Z",
    modified: "2020-04-08T11:38:13.957Z",
    lineStatuses: [
      {
        $type:
          "Tfl.Api.Presentation.Entities.LineStatus, Tfl.Api.Presentation.Entities",
        id: 0,
        lineId: "bakerloo",
        statusSeverity: 0,
        statusSeverityDescription: "Special Service",
        reason:
          "Bakerloo Line: A 10 minute service is operating between Elephant & Castle and Queen's Park. A 30 minute service is operating between Queen's Park and Harrow & Wealdstone due to operational restrictions. Public transport should only be used for essential journeys. ",
        created: "0001-01-01T00:00:00",
        validityPeriods: [
          {
            $type:
              "Tfl.Api.Presentation.Entities.ValidityPeriod, Tfl.Api.Presentation.Entities",
            fromDate: "2020-04-11T05:31:47Z",
            toDate: "2020-04-11T17:31:47Z",
            isNow: true,
          },
        ],
        disruption: {
          $type:
            "Tfl.Api.Presentation.Entities.Disruption, Tfl.Api.Presentation.Entities",
          category: "RealTime",
          categoryDescription: "RealTime",
          description:
            "Bakerloo Line: A 10 minute service is operating between Elephant & Castle and Queen's Park. A 30 minute service is operating between Queen's Park and Harrow & Wealdstone due to operational restrictions. Public transport should only be used for essential journeys. ",
          affectedRoutes: [],
          affectedStops: [],
          closureText: "specialService",
        },
      },
      {
        $type:
          "Tfl.Api.Presentation.Entities.LineStatus, Tfl.Api.Presentation.Entities",
        id: 0,
        lineId: "bakerloo",
        statusSeverity: 3,
        statusSeverityDescription: "Part Suspended",
        reason:
          "Bakerloo Line: A 10 minute service is operating between Elephant & Castle and Queen's Park. A 30 minute service is operating between Queen's Park and Harrow & Wealdstone due to operational restrictions. Public transport should only be used for essential journeys. ",
        created: "0001-01-01T00:00:00",
        validityPeriods: [
          {
            $type:
              "Tfl.Api.Presentation.Entities.ValidityPeriod, Tfl.Api.Presentation.Entities",
            fromDate: "2020-04-11T05:31:47Z",
            toDate: "2020-04-11T17:31:47Z",
            isNow: true,
          },
        ],
        disruption: {
          $type:
            "Tfl.Api.Presentation.Entities.Disruption, Tfl.Api.Presentation.Entities",
          category: "RealTime",
          categoryDescription: "RealTime",
          description:
            "Bakerloo Line: A 10 minute service is operating between Elephant & Castle and Queen's Park. A 30 minute service is operating between Queen's Park and Harrow & Wealdstone due to operational restrictions. Public transport should only be used for essential journeys. ",
          affectedRoutes: [],
          affectedStops: [],
          closureText: "partSuspended",
        },
      },
    ],
    routeSections: [],
    serviceTypes: [
      {
        $type:
          "Tfl.Api.Presentation.Entities.LineServiceTypeInfo, Tfl.Api.Presentation.Entities",
        name: "Regular",
        uri: "/Line/Route?ids=Bakerloo&serviceTypes=Regular",
      },
    ],
    crowding: {
      $type:
        "Tfl.Api.Presentation.Entities.Crowding, Tfl.Api.Presentation.Entities",
    },
  },
  {
    $type: "Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities",
    id: "central",
    name: "Central",
    modeName: "tube",
    disruptions: [],
    created: "2020-04-08T11:38:13.957Z",
    modified: "2020-04-08T11:38:13.957Z",
    lineStatuses: [
      {
        $type:
          "Tfl.Api.Presentation.Entities.LineStatus, Tfl.Api.Presentation.Entities",
        id: 0,
        lineId: "central",
        statusSeverity: 3,
        statusSeverityDescription: "Part Suspended",
        reason:
          "Central Line: A 20 minute service is operating between Woodford and Hainault and a 15 minute service is operating on the rest of the line due to operational restrictions. Public transport should only be used for essential journeys. ",
        created: "0001-01-01T00:00:00",
        validityPeriods: [
          {
            $type:
              "Tfl.Api.Presentation.Entities.ValidityPeriod, Tfl.Api.Presentation.Entities",
            fromDate: "2020-04-11T09:02:45Z",
            toDate: "2020-04-11T18:02:45Z",
            isNow: true,
          },
        ],
        disruption: {
          $type:
            "Tfl.Api.Presentation.Entities.Disruption, Tfl.Api.Presentation.Entities",
          category: "RealTime",
          categoryDescription: "RealTime",
          description:
            "Central Line: A 20 minute service is operating between Woodford and Hainault and a 15 minute service is operating on the rest of the line due to operational restrictions. Public transport should only be used for essential journeys. ",
          affectedRoutes: [],
          affectedStops: [],
          closureText: "partSuspended",
        },
      },
      {
        $type:
          "Tfl.Api.Presentation.Entities.LineStatus, Tfl.Api.Presentation.Entities",
        id: 0,
        lineId: "central",
        statusSeverity: 0,
        statusSeverityDescription: "Special Service",
        reason:
          "Central Line: A 20 minute service is operating between Woodford and Hainault and a 15 minute service is operating on the rest of the line due to operational restrictions. Public transport should only be used for essential journeys. ",
        created: "0001-01-01T00:00:00",
        validityPeriods: [
          {
            $type:
              "Tfl.Api.Presentation.Entities.ValidityPeriod, Tfl.Api.Presentation.Entities",
            fromDate: "2020-04-11T09:02:46Z",
            toDate: "2020-04-11T18:02:46Z",
            isNow: true,
          },
        ],
        disruption: {
          $type:
            "Tfl.Api.Presentation.Entities.Disruption, Tfl.Api.Presentation.Entities",
          category: "RealTime",
          categoryDescription: "RealTime",
          description:
            "Central Line: A 20 minute service is operating between Woodford and Hainault and a 15 minute service is operating on the rest of the line due to operational restrictions. Public transport should only be used for essential journeys. ",
          affectedRoutes: [],
          affectedStops: [],
          closureText: "specialService",
        },
      },
    ],
    routeSections: [],
    serviceTypes: [
      {
        $type:
          "Tfl.Api.Presentation.Entities.LineServiceTypeInfo, Tfl.Api.Presentation.Entities",
        name: "Regular",
        uri: "/Line/Route?ids=Central&serviceTypes=Regular",
      },
      {
        $type:
          "Tfl.Api.Presentation.Entities.LineServiceTypeInfo, Tfl.Api.Presentation.Entities",
        name: "Night",
        uri: "/Line/Route?ids=Central&serviceTypes=Night",
      },
    ],
    crowding: {
      $type:
        "Tfl.Api.Presentation.Entities.Crowding, Tfl.Api.Presentation.Entities",
    },
  },
  {
    $type: "Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities",
    id: "circle",
    name: "Circle",
    modeName: "tube",
    disruptions: [],
    created: "2020-04-08T11:38:13.967Z",
    modified: "2020-04-08T11:38:13.967Z",
    lineStatuses: [
      {
        $type:
          "Tfl.Api.Presentation.Entities.LineStatus, Tfl.Api.Presentation.Entities",
        id: 0,
        lineId: "circle",
        statusSeverity: 4,
        statusSeverityDescription: "Planned Closure",
        reason:
          "CIRCLE LINE: No service until further notice due to operational restrictions.",
        created: "0001-01-01T00:00:00",
        validityPeriods: [
          {
            $type:
              "Tfl.Api.Presentation.Entities.ValidityPeriod, Tfl.Api.Presentation.Entities",
            fromDate: "2020-04-07T12:41:00Z",
            toDate: "2020-12-31T01:29:00Z",
            isNow: false,
          },
        ],
        disruption: {
          $type:
            "Tfl.Api.Presentation.Entities.Disruption, Tfl.Api.Presentation.Entities",
          category: "PlannedWork",
          categoryDescription: "PlannedWork",
          description:
            "CIRCLE LINE: No service until further notice due to operational restrictions.",
          created: "2020-04-07T12:42:00Z",
          affectedRoutes: [],
          affectedStops: [],
          closureText: "plannedClosure",
        },
      },
      {
        $type:
          "Tfl.Api.Presentation.Entities.LineStatus, Tfl.Api.Presentation.Entities",
        id: 0,
        lineId: "circle",
        statusSeverity: 20,
        statusSeverityDescription: "Service Closed",
        reason: "Circle Line: No service due to operational restrictions. ",
        created: "0001-01-01T00:00:00",
        validityPeriods: [
          {
            $type:
              "Tfl.Api.Presentation.Entities.ValidityPeriod, Tfl.Api.Presentation.Entities",
            fromDate: "2020-04-11T08:16:15Z",
            toDate: "2020-04-11T17:16:15Z",
            isNow: true,
          },
        ],
        disruption: {
          $type:
            "Tfl.Api.Presentation.Entities.Disruption, Tfl.Api.Presentation.Entities",
          category: "RealTime",
          categoryDescription: "RealTime",
          description:
            "Circle Line: No service due to operational restrictions. ",
          affectedRoutes: [],
          affectedStops: [],
          closureText: "serviceClosed",
        },
      },
    ],
    routeSections: [],
    serviceTypes: [
      {
        $type:
          "Tfl.Api.Presentation.Entities.LineServiceTypeInfo, Tfl.Api.Presentation.Entities",
        name: "Regular",
        uri: "/Line/Route?ids=Circle&serviceTypes=Regular",
      },
    ],
    crowding: {
      $type:
        "Tfl.Api.Presentation.Entities.Crowding, Tfl.Api.Presentation.Entities",
    },
  },
  {
    $type: "Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities",
    id: "district",
    name: "District",
    modeName: "tube",
    disruptions: [],
    created: "2020-04-08T11:38:13.967Z",
    modified: "2020-04-08T11:38:13.967Z",
    lineStatuses: [
      {
        $type:
          "Tfl.Api.Presentation.Entities.LineStatus, Tfl.Api.Presentation.Entities",
        id: 0,
        lineId: "district",
        statusSeverity: 3,
        statusSeverityDescription: "Part Suspended",
        reason:
          "District Line: A 15 minute service between Upminster and Kensington (Olympia). A 20 minute service between Wimbledon and Edgware Road. A 20 minute service between High Street Kensington and Richmond / Ealing Broadway due to operational restrictions. Public transport should only be used for essential journeys. ",
        created: "0001-01-01T00:00:00",
        validityPeriods: [
          {
            $type:
              "Tfl.Api.Presentation.Entities.ValidityPeriod, Tfl.Api.Presentation.Entities",
            fromDate: "2020-04-11T09:03:01Z",
            toDate: "2020-04-11T18:03:01Z",
            isNow: true,
          },
        ],
        disruption: {
          $type:
            "Tfl.Api.Presentation.Entities.Disruption, Tfl.Api.Presentation.Entities",
          category: "RealTime",
          categoryDescription: "RealTime",
          description:
            "District Line: A 15 minute service between Upminster and Kensington (Olympia). A 20 minute service between Wimbledon and Edgware Road. A 20 minute service between High Street Kensington and Richmond / Ealing Broadway due to operational restrictions. Public transport should only be used for essential journeys. ",
          affectedRoutes: [],
          affectedStops: [],
          closureText: "partSuspended",
        },
      },
      {
        $type:
          "Tfl.Api.Presentation.Entities.LineStatus, Tfl.Api.Presentation.Entities",
        id: 0,
        lineId: "district",
        statusSeverity: 0,
        statusSeverityDescription: "Special Service",
        reason:
          "District Line: A 15 minute service between Upminster and Kensington (Olympia). A 20 minute service between Wimbledon and Edgware Road. A 20 minute service between High Street Kensington and Richmond / Ealing Broadway due to operational restrictions. Public transport should only be used for essential journeys. ",
        created: "0001-01-01T00:00:00",
        validityPeriods: [
          {
            $type:
              "Tfl.Api.Presentation.Entities.ValidityPeriod, Tfl.Api.Presentation.Entities",
            fromDate: "2020-04-11T09:03:02Z",
            toDate: "2020-04-11T18:03:02Z",
            isNow: true,
          },
        ],
        disruption: {
          $type:
            "Tfl.Api.Presentation.Entities.Disruption, Tfl.Api.Presentation.Entities",
          category: "RealTime",
          categoryDescription: "RealTime",
          description:
            "District Line: A 15 minute service between Upminster and Kensington (Olympia). A 20 minute service between Wimbledon and Edgware Road. A 20 minute service between High Street Kensington and Richmond / Ealing Broadway due to operational restrictions. Public transport should only be used for essential journeys. ",
          affectedRoutes: [],
          affectedStops: [],
          closureText: "specialService",
        },
      },
    ],
    routeSections: [],
    serviceTypes: [
      {
        $type:
          "Tfl.Api.Presentation.Entities.LineServiceTypeInfo, Tfl.Api.Presentation.Entities",
        name: "Regular",
        uri: "/Line/Route?ids=District&serviceTypes=Regular",
      },
    ],
    crowding: {
      $type:
        "Tfl.Api.Presentation.Entities.Crowding, Tfl.Api.Presentation.Entities",
    },
  },
  {
    $type: "Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities",
    id: "hammersmith-city",
    name: "Hammersmith & City",
    modeName: "tube",
    disruptions: [],
    created: "2020-04-08T11:38:13.97Z",
    modified: "2020-04-08T11:38:13.97Z",
    lineStatuses: [
      {
        $type:
          "Tfl.Api.Presentation.Entities.LineStatus, Tfl.Api.Presentation.Entities",
        id: 0,
        lineId: "hammersmith-city",
        statusSeverity: 0,
        statusSeverityDescription: "Special Service",
        reason:
          "Hammersmith and City Line: A 15 minute service is operating due to operational restrictions. Public transport should only be used for essential journeys. ",
        created: "0001-01-01T00:00:00",
        validityPeriods: [
          {
            $type:
              "Tfl.Api.Presentation.Entities.ValidityPeriod, Tfl.Api.Presentation.Entities",
            fromDate: "2020-04-11T08:16:53Z",
            toDate: "2020-04-11T17:16:53Z",
            isNow: true,
          },
        ],
        disruption: {
          $type:
            "Tfl.Api.Presentation.Entities.Disruption, Tfl.Api.Presentation.Entities",
          category: "RealTime",
          categoryDescription: "RealTime",
          description:
            "Hammersmith and City Line: A 15 minute service is operating due to operational restrictions. Public transport should only be used for essential journeys. ",
          affectedRoutes: [],
          affectedStops: [],
          closureText: "specialService",
        },
      },
    ],
    routeSections: [],
    serviceTypes: [
      {
        $type:
          "Tfl.Api.Presentation.Entities.LineServiceTypeInfo, Tfl.Api.Presentation.Entities",
        name: "Regular",
        uri: "/Line/Route?ids=Hammersmith & City&serviceTypes=Regular",
      },
    ],
    crowding: {
      $type:
        "Tfl.Api.Presentation.Entities.Crowding, Tfl.Api.Presentation.Entities",
    },
  },
  {
    $type: "Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities",
    id: "jubilee",
    name: "Jubilee",
    modeName: "tube",
    disruptions: [],
    created: "2020-04-08T11:38:13.96Z",
    modified: "2020-04-08T11:38:13.96Z",
    lineStatuses: [
      {
        $type:
          "Tfl.Api.Presentation.Entities.LineStatus, Tfl.Api.Presentation.Entities",
        id: 0,
        lineId: "jubilee",
        statusSeverity: 0,
        statusSeverityDescription: "Special Service",
        reason:
          "Jubilee Line: A 10 minute service is operating due to operational restrictions. Public transport should only be used for essential journeys. ",
        created: "0001-01-01T00:00:00",
        validityPeriods: [
          {
            $type:
              "Tfl.Api.Presentation.Entities.ValidityPeriod, Tfl.Api.Presentation.Entities",
            fromDate: "2020-04-11T06:49:53Z",
            toDate: "2020-04-11T15:49:53Z",
            isNow: true,
          },
        ],
        disruption: {
          $type:
            "Tfl.Api.Presentation.Entities.Disruption, Tfl.Api.Presentation.Entities",
          category: "RealTime",
          categoryDescription: "RealTime",
          description:
            "Jubilee Line: A 10 minute service is operating due to operational restrictions. Public transport should only be used for essential journeys. ",
          affectedRoutes: [],
          affectedStops: [],
          closureText: "specialService",
        },
      },
    ],
    routeSections: [],
    serviceTypes: [
      {
        $type:
          "Tfl.Api.Presentation.Entities.LineServiceTypeInfo, Tfl.Api.Presentation.Entities",
        name: "Regular",
        uri: "/Line/Route?ids=Jubilee&serviceTypes=Regular",
      },
      {
        $type:
          "Tfl.Api.Presentation.Entities.LineServiceTypeInfo, Tfl.Api.Presentation.Entities",
        name: "Night",
        uri: "/Line/Route?ids=Jubilee&serviceTypes=Night",
      },
    ],
    crowding: {
      $type:
        "Tfl.Api.Presentation.Entities.Crowding, Tfl.Api.Presentation.Entities",
    },
  },
  {
    $type: "Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities",
    id: "metropolitan",
    name: "Metropolitan",
    modeName: "tube",
    disruptions: [],
    created: "2020-04-08T11:38:13.98Z",
    modified: "2020-04-08T11:38:13.98Z",
    lineStatuses: [
      {
        $type:
          "Tfl.Api.Presentation.Entities.LineStatus, Tfl.Api.Presentation.Entities",
        id: 0,
        lineId: "metropolitan",
        statusSeverity: 3,
        statusSeverityDescription: "Part Suspended",
        reason:
          "Metropolitan Line: A 15 minute service is operating between Baker Street and Watford and between Aldgate and Uxbridge. A 30 minute service is operating between Harrow-on-the-Hill and Amersham / Chesham and between Chesham and Watford. Public transport should only be used for essential journeys. ",
        created: "0001-01-01T00:00:00",
        validityPeriods: [
          {
            $type:
              "Tfl.Api.Presentation.Entities.ValidityPeriod, Tfl.Api.Presentation.Entities",
            fromDate: "2020-04-11T08:17:59Z",
            toDate: "2020-04-11T17:17:59Z",
            isNow: true,
          },
        ],
        disruption: {
          $type:
            "Tfl.Api.Presentation.Entities.Disruption, Tfl.Api.Presentation.Entities",
          category: "RealTime",
          categoryDescription: "RealTime",
          description:
            "Metropolitan Line: A 15 minute service is operating between Baker Street and Watford and between Aldgate and Uxbridge. A 30 minute service is operating between Harrow-on-the-Hill and Amersham / Chesham and between Chesham and Watford. Public transport should only be used for essential journeys. ",
          affectedRoutes: [],
          affectedStops: [],
          closureText: "partSuspended",
        },
      },
      {
        $type:
          "Tfl.Api.Presentation.Entities.LineStatus, Tfl.Api.Presentation.Entities",
        id: 0,
        lineId: "metropolitan",
        statusSeverity: 0,
        statusSeverityDescription: "Special Service",
        reason:
          "Metropolitan Line: A 15 minute service is operating between Baker Street and Watford and between Aldgate and Uxbridge. A 30 minute service is operating between Harrow-on-the-Hill and Amersham / Chesham and between Chesham and Watford. Public transport should only be used for essential journeys. ",
        created: "0001-01-01T00:00:00",
        validityPeriods: [
          {
            $type:
              "Tfl.Api.Presentation.Entities.ValidityPeriod, Tfl.Api.Presentation.Entities",
            fromDate: "2020-04-11T08:18:00Z",
            toDate: "2020-04-11T17:18:00Z",
            isNow: true,
          },
        ],
        disruption: {
          $type:
            "Tfl.Api.Presentation.Entities.Disruption, Tfl.Api.Presentation.Entities",
          category: "RealTime",
          categoryDescription: "RealTime",
          description:
            "Metropolitan Line: A 15 minute service is operating between Baker Street and Watford and between Aldgate and Uxbridge. A 30 minute service is operating between Harrow-on-the-Hill and Amersham / Chesham and between Chesham and Watford. Public transport should only be used for essential journeys. ",
          affectedRoutes: [],
          affectedStops: [],
          closureText: "specialService",
        },
      },
    ],
    routeSections: [],
    serviceTypes: [
      {
        $type:
          "Tfl.Api.Presentation.Entities.LineServiceTypeInfo, Tfl.Api.Presentation.Entities",
        name: "Regular",
        uri: "/Line/Route?ids=Metropolitan&serviceTypes=Regular",
      },
    ],
    crowding: {
      $type:
        "Tfl.Api.Presentation.Entities.Crowding, Tfl.Api.Presentation.Entities",
    },
  },
  {
    $type: "Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities",
    id: "northern",
    name: "Northern",
    modeName: "tube",
    disruptions: [],
    created: "2020-04-08T11:38:13.977Z",
    modified: "2020-04-08T11:38:13.977Z",
    lineStatuses: [
      {
        $type:
          "Tfl.Api.Presentation.Entities.LineStatus, Tfl.Api.Presentation.Entities",
        id: 0,
        lineId: "northern",
        statusSeverity: 3,
        statusSeverityDescription: "Part Suspended",
        reason:
          "Northern Line: A 10 minute service is operating between Kennington and Edgware via Charing Cross and between Morden and High Barnet via Bank. A 15 minute service is operating between Finchley Central and Mill Hill East. Public transport should only be used for essential journeys. ",
        created: "0001-01-01T00:00:00",
        validityPeriods: [
          {
            $type:
              "Tfl.Api.Presentation.Entities.ValidityPeriod, Tfl.Api.Presentation.Entities",
            fromDate: "2020-04-11T08:20:19Z",
            toDate: "2020-04-11T17:20:19Z",
            isNow: true,
          },
        ],
        disruption: {
          $type:
            "Tfl.Api.Presentation.Entities.Disruption, Tfl.Api.Presentation.Entities",
          category: "RealTime",
          categoryDescription: "RealTime",
          description:
            "Northern Line: A 10 minute service is operating between Kennington and Edgware via Charing Cross and between Morden and High Barnet via Bank. A 15 minute service is operating between Finchley Central and Mill Hill East. Public transport should only be used for essential journeys. ",
          affectedRoutes: [],
          affectedStops: [],
          closureText: "partSuspended",
        },
      },
      {
        $type:
          "Tfl.Api.Presentation.Entities.LineStatus, Tfl.Api.Presentation.Entities",
        id: 0,
        lineId: "northern",
        statusSeverity: 0,
        statusSeverityDescription: "Special Service",
        reason:
          "Northern Line: A 10 minute service is operating between Kennington and Edgware via Charing Cross and between Morden and High Barnet via Bank. A 15 minute service is operating between Finchley Central and Mill Hill East. Public transport should only be used for essential journeys. ",
        created: "0001-01-01T00:00:00",
        validityPeriods: [
          {
            $type:
              "Tfl.Api.Presentation.Entities.ValidityPeriod, Tfl.Api.Presentation.Entities",
            fromDate: "2020-04-11T08:20:20Z",
            toDate: "2020-04-11T17:20:20Z",
            isNow: true,
          },
        ],
        disruption: {
          $type:
            "Tfl.Api.Presentation.Entities.Disruption, Tfl.Api.Presentation.Entities",
          category: "RealTime",
          categoryDescription: "RealTime",
          description:
            "Northern Line: A 10 minute service is operating between Kennington and Edgware via Charing Cross and between Morden and High Barnet via Bank. A 15 minute service is operating between Finchley Central and Mill Hill East. Public transport should only be used for essential journeys. ",
          affectedRoutes: [],
          affectedStops: [],
          closureText: "specialService",
        },
      },
    ],
    routeSections: [],
    serviceTypes: [
      {
        $type:
          "Tfl.Api.Presentation.Entities.LineServiceTypeInfo, Tfl.Api.Presentation.Entities",
        name: "Regular",
        uri: "/Line/Route?ids=Northern&serviceTypes=Regular",
      },
      {
        $type:
          "Tfl.Api.Presentation.Entities.LineServiceTypeInfo, Tfl.Api.Presentation.Entities",
        name: "Night",
        uri: "/Line/Route?ids=Northern&serviceTypes=Night",
      },
    ],
    crowding: {
      $type:
        "Tfl.Api.Presentation.Entities.Crowding, Tfl.Api.Presentation.Entities",
    },
  },
  {
    $type: "Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities",
    id: "piccadilly",
    name: "Piccadilly",
    modeName: "tube",
    disruptions: [],
    created: "2020-04-08T11:38:13.963Z",
    modified: "2020-04-08T11:38:13.963Z",
    lineStatuses: [
      {
        $type:
          "Tfl.Api.Presentation.Entities.LineStatus, Tfl.Api.Presentation.Entities",
        id: 0,
        lineId: "piccadilly",
        statusSeverity: 0,
        statusSeverityDescription: "Special Service",
        reason:
          "Piccadilly Line: A 12 minute service is operating between Cockfosters and Heathrow Airport. A 20 minute service is operating between Acton town and Rayners Lane due to operation restrictions. Public transport should only be used for essential journeys. ",
        created: "0001-01-01T00:00:00",
        validityPeriods: [
          {
            $type:
              "Tfl.Api.Presentation.Entities.ValidityPeriod, Tfl.Api.Presentation.Entities",
            fromDate: "2020-04-11T09:03:26Z",
            toDate: "2020-04-11T18:03:26Z",
            isNow: true,
          },
        ],
        disruption: {
          $type:
            "Tfl.Api.Presentation.Entities.Disruption, Tfl.Api.Presentation.Entities",
          category: "RealTime",
          categoryDescription: "RealTime",
          description:
            "Piccadilly Line: A 12 minute service is operating between Cockfosters and Heathrow Airport. A 20 minute service is operating between Acton town and Rayners Lane due to operation restrictions. Public transport should only be used for essential journeys. ",
          affectedRoutes: [],
          affectedStops: [],
          closureText: "specialService",
        },
      },
      {
        $type:
          "Tfl.Api.Presentation.Entities.LineStatus, Tfl.Api.Presentation.Entities",
        id: 0,
        lineId: "piccadilly",
        statusSeverity: 3,
        statusSeverityDescription: "Part Suspended",
        reason:
          "Piccadilly Line: A 12 minute service is operating between Cockfosters and Heathrow Airport. A 20 minute service is operating between Acton town and Rayners Lane due to operation restrictions. Public transport should only be used for essential journeys. ",
        created: "0001-01-01T00:00:00",
        validityPeriods: [
          {
            $type:
              "Tfl.Api.Presentation.Entities.ValidityPeriod, Tfl.Api.Presentation.Entities",
            fromDate: "2020-04-11T09:03:26Z",
            toDate: "2020-04-11T18:03:26Z",
            isNow: true,
          },
        ],
        disruption: {
          $type:
            "Tfl.Api.Presentation.Entities.Disruption, Tfl.Api.Presentation.Entities",
          category: "RealTime",
          categoryDescription: "RealTime",
          description:
            "Piccadilly Line: A 12 minute service is operating between Cockfosters and Heathrow Airport. A 20 minute service is operating between Acton town and Rayners Lane due to operation restrictions. Public transport should only be used for essential journeys. ",
          affectedRoutes: [],
          affectedStops: [],
          closureText: "partSuspended",
        },
      },
    ],
    routeSections: [],
    serviceTypes: [
      {
        $type:
          "Tfl.Api.Presentation.Entities.LineServiceTypeInfo, Tfl.Api.Presentation.Entities",
        name: "Regular",
        uri: "/Line/Route?ids=Piccadilly&serviceTypes=Regular",
      },
      {
        $type:
          "Tfl.Api.Presentation.Entities.LineServiceTypeInfo, Tfl.Api.Presentation.Entities",
        name: "Night",
        uri: "/Line/Route?ids=Piccadilly&serviceTypes=Night",
      },
    ],
    crowding: {
      $type:
        "Tfl.Api.Presentation.Entities.Crowding, Tfl.Api.Presentation.Entities",
    },
  },
];

exports.singleLineStatus = {
  $type: "Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities",
  id: "victoria",
  name: "Victoria",
  modeName: "tube",
  disruptions: [],
  created: "2020-04-08T11:38:13.967Z",
  modified: "2020-04-08T11:38:13.967Z",
  lineStatuses: [
    {
      $type:
        "Tfl.Api.Presentation.Entities.LineStatus, Tfl.Api.Presentation.Entities",
      id: 0,
      lineId: "victoria",
      statusSeverity: 0,
      statusSeverityDescription: "Special Service",
      reason:
        "Victoria Line: A 8 minute service is operating due to operational restrictions. Public transport should only be used for essential journeys. ",
      created: "0001-01-01T00:00:00",
      validityPeriods: [
        {
          $type:
            "Tfl.Api.Presentation.Entities.ValidityPeriod, Tfl.Api.Presentation.Entities",
          fromDate: "2020-04-11T08:26:08Z",
          toDate: "2020-04-11T17:26:08Z",
          isNow: true,
        },
      ],
      disruption: {
        $type:
          "Tfl.Api.Presentation.Entities.Disruption, Tfl.Api.Presentation.Entities",
        category: "RealTime",
        categoryDescription: "RealTime",
        description:
          "Victoria Line: A 8 minute service is operating due to operational restrictions. Public transport should only be used for essential journeys. ",
        affectedRoutes: [],
        affectedStops: [],
        closureText: "specialService",
      },
    },
  ],
  routeSections: [],
  serviceTypes: [
    {
      $type:
        "Tfl.Api.Presentation.Entities.LineServiceTypeInfo, Tfl.Api.Presentation.Entities",
      name: "Regular",
      uri: "/Line/Route?ids=Victoria&serviceTypes=Regular",
    },
    {
      $type:
        "Tfl.Api.Presentation.Entities.LineServiceTypeInfo, Tfl.Api.Presentation.Entities",
      name: "Night",
      uri: "/Line/Route?ids=Victoria&serviceTypes=Night",
    },
  ],
  crowding: {
    $type:
      "Tfl.Api.Presentation.Entities.Crowding, Tfl.Api.Presentation.Entities",
  },
};

exports.twoLineStatuses = {
  $type: "Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities",
  id: "waterloo-city",
  name: "Waterloo & City",
  modeName: "tube",
  disruptions: [],
  created: "2020-04-08T11:38:13.96Z",
  modified: "2020-04-08T11:38:13.96Z",
  lineStatuses: [
    {
      $type:
        "Tfl.Api.Presentation.Entities.LineStatus, Tfl.Api.Presentation.Entities",
      id: 0,
      lineId: "waterloo-city",
      statusSeverity: 4,
      statusSeverityDescription: "Planned Closure",
      reason:
        "WATERLOO & CITY LINE: No service until further notice due to operational restrictions.",
      created: "0001-01-01T00:00:00",
      validityPeriods: [
        {
          $type:
            "Tfl.Api.Presentation.Entities.ValidityPeriod, Tfl.Api.Presentation.Entities",
          fromDate: "2020-04-07T12:41:00Z",
          toDate: "2020-12-31T01:29:00Z",
          isNow: false,
        },
      ],
      disruption: {
        $type:
          "Tfl.Api.Presentation.Entities.Disruption, Tfl.Api.Presentation.Entities",
        category: "PlannedWork",
        categoryDescription: "PlannedWork",
        description:
          "WATERLOO & CITY LINE: No service until further notice due to operational restrictions.",
        created: "2020-04-07T12:41:00Z",
        affectedRoutes: [],
        affectedStops: [],
        closureText: "plannedClosure",
      },
    },
    {
      $type:
        "Tfl.Api.Presentation.Entities.LineStatus, Tfl.Api.Presentation.Entities",
      id: 0,
      lineId: "waterloo-city",
      statusSeverity: 20,
      statusSeverityDescription: "Service Closed",
      reason:
        "Waterloo and City Line: No service due to operational restrictions. ",
      created: "0001-01-01T00:00:00",
      validityPeriods: [
        {
          $type:
            "Tfl.Api.Presentation.Entities.ValidityPeriod, Tfl.Api.Presentation.Entities",
          fromDate: "2020-04-11T08:26:22Z",
          toDate: "2020-04-11T17:26:22Z",
          isNow: true,
        },
      ],
      disruption: {
        $type:
          "Tfl.Api.Presentation.Entities.Disruption, Tfl.Api.Presentation.Entities",
        category: "RealTime",
        categoryDescription: "RealTime",
        description:
          "Waterloo and City Line: No service due to operational restrictions. ",
        affectedRoutes: [],
        affectedStops: [],
        closureText: "serviceClosed",
      },
    },
  ],
  routeSections: [],
  serviceTypes: [
    {
      $type:
        "Tfl.Api.Presentation.Entities.LineServiceTypeInfo, Tfl.Api.Presentation.Entities",
      name: "Regular",
      uri: "/Line/Route?ids=Waterloo & City&serviceTypes=Regular",
    },
  ],
  crowding: {
    $type:
      "Tfl.Api.Presentation.Entities.Crowding, Tfl.Api.Presentation.Entities",
  },
};

exports.twoLineStatusesReversed = {
  $type: "Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities",
  id: "waterloo-city",
  name: "Waterloo & City",
  modeName: "tube",
  disruptions: [],
  created: "2020-04-08T11:38:13.96Z",
  modified: "2020-04-08T11:38:13.96Z",
  lineStatuses: [
    {
      $type:
        "Tfl.Api.Presentation.Entities.LineStatus, Tfl.Api.Presentation.Entities",
      id: 0,
      lineId: "waterloo-city",
      statusSeverity: 20,
      statusSeverityDescription: "Service Closed",
      reason:
        "Waterloo and City Line: No service due to operational restrictions. ",
      created: "0001-01-01T00:00:00",
      validityPeriods: [
        {
          $type:
            "Tfl.Api.Presentation.Entities.ValidityPeriod, Tfl.Api.Presentation.Entities",
          fromDate: "2020-04-11T08:26:22Z",
          toDate: "2020-04-11T17:26:22Z",
          isNow: true,
        },
      ],
      disruption: {
        $type:
          "Tfl.Api.Presentation.Entities.Disruption, Tfl.Api.Presentation.Entities",
        category: "RealTime",
        categoryDescription: "RealTime",
        description:
          "Waterloo and City Line: No service due to operational restrictions. ",
        affectedRoutes: [],
        affectedStops: [],
        closureText: "serviceClosed",
      },
    },
    {
      $type:
        "Tfl.Api.Presentation.Entities.LineStatus, Tfl.Api.Presentation.Entities",
      id: 0,
      lineId: "waterloo-city",
      statusSeverity: 4,
      statusSeverityDescription: "Planned Closure",
      reason:
        "WATERLOO & CITY LINE: No service until further notice due to operational restrictions.",
      created: "0001-01-01T00:00:00",
      validityPeriods: [
        {
          $type:
            "Tfl.Api.Presentation.Entities.ValidityPeriod, Tfl.Api.Presentation.Entities",
          fromDate: "2020-04-07T12:41:00Z",
          toDate: "2020-12-31T01:29:00Z",
          isNow: false,
        },
      ],
      disruption: {
        $type:
          "Tfl.Api.Presentation.Entities.Disruption, Tfl.Api.Presentation.Entities",
        category: "PlannedWork",
        categoryDescription: "PlannedWork",
        description:
          "WATERLOO & CITY LINE: No service until further notice due to operational restrictions.",
        created: "2020-04-07T12:41:00Z",
        affectedRoutes: [],
        affectedStops: [],
        closureText: "plannedClosure",
      },
    },
  ],
  routeSections: [],
  serviceTypes: [
    {
      $type:
        "Tfl.Api.Presentation.Entities.LineServiceTypeInfo, Tfl.Api.Presentation.Entities",
      name: "Regular",
      uri: "/Line/Route?ids=Waterloo & City&serviceTypes=Regular",
    },
  ],
  crowding: {
    $type:
      "Tfl.Api.Presentation.Entities.Crowding, Tfl.Api.Presentation.Entities",
  },
};
