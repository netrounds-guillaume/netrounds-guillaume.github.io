import { Injectable } from '@angular/core';

export class CountryInfo {
    country: string;
    hydro: number;
    oil: number;
    gas: number;
    coal: number;
    nuclear: number;
}

export class EnergyDescription {
    value: string;
    name: string;
}

const energySources: EnergyDescription[] = [
    { value: 'test_agent_1', name: 'Test Agent 1' },
    { value: 'test_agent_2', name: 'Test Agent 2' },
    { value: 'test_agent_3', name: 'Test Agent 3' },
    { value: 'test_agent_4', name: 'Test Agent 4' },
    { value: 'test_agent_5', name: 'Test Agent 5' }
];

export class Task {
  id: number;
  Subject: string;
  StartDate: string;
  DueDate: string;
  Status: string;
  Priority: string;
  Completion: number;
  monitor_id: number;
}

export class Monitor {
  id: number;
  description: string;
  created: number;
  creator: any;
  shared_from: any;
  shared_to: any;
  running: boolean;
  monitoring_logs: any;
  tags: any;
  esbar: any;
  name: string;
  sla: any;
}

const monitors: Monitor[] = [{
  description: 'Service chain provisioned in Lule\u00e5, Sweden lab on ESXi',
  created: 1545144928,
  creator: {
    id: 9,
    email: 'jonas.krogell@netrounds.com'
  },
  shared_from: [],
  id: 16501,
  shared_to: false,
  running: true,
  monitoring_logs: [],
  tags: [],
  sla: ['sla_bad_thumb', 0.0],
  esbar: {
    graph_width: 360,
    value_min: 0.0,
    image_width: 360,
    graph_left: 0,
    known_total: 1200.0,
    image_height: 10,
    es_total: 1200.0,
    graph_top: 0,
    graph_start: 1553852821,
    graph_end: 1553853721,
    value_max: 1.0,
    graph_height: 10,
    image_base64: 'iVBORw0KGgoAAAANSUhEUgAAAWgAAAAKCAIAAAAWzFNnAAAABmJLR0QA/wD/AP+gvaeTAAAAQ0lEQVRoge3UMRHAMBDAsKb8QT207N08Jb2TEHjyeoC7zczphK/3dADwP8YBZMYBZMYBZMYBZMYBZMYBZMYBZMYBZBugZgJU71C+yQAAAABJRU5ErkJggg=='
  },
  name: 'Service Chain Hourly Test (VMware ESX)'
}, {
  description: 'Service chain provisioned in Lule\u00e5, Sweden lab on ESXi',
  created: 1545142870,
  creator: {
    id: 9,
    email: 'jonas.krogell@netrounds.com'
  },
  shared_from: [],
  id: 16495,
  shared_to: false,
  running: true,
  monitoring_logs: [{
      name: 'VNF1+2+3',
      logrecords: [{
          message: 'sweden-esx-ta-1:eth2 (IPv4) (server) <- sweden-esx-ta-1:eth1 (IPv4) (client): Sender is overloaded.',
          level: 'warning',
          start_time: 1553853655,
          end_time: 1553853715
        }
      ]
    }, {
      name: 'VNF3 Firewall',
      logrecords: [{
          message: 'sweden-esx-ta-1:eth2 (IPv4) (server) <- sweden-esx-ta-1:eth3 (IPv4) (client): Sender is overloaded.',
          level: 'warning',
          start_time: 1553853659,
          end_time: 1553853717
        }
      ]
    }, {
      name: 'VNF2 IPS',
      logrecords: [{
          message: 'sweden-esx-ta-1:eth3 (IPv4) (server) <- sweden-esx-ta-1:eth4 (IPv4) (client): Sender is overloaded.',
          level: 'warning',
          start_time: 1553853630,
          end_time: 1553853692
        }
      ]
    }, {
      name: 'VNF1 Router',
      logrecords: [{
          message: 'sweden-esx-ta-1:eth4 (IPv4) (server) <- sweden-esx-ta-1:eth1 (IPv4) (client): Sender is overloaded.',
          level: 'warning',
          start_time: 1553853632,
          end_time: 1553853695
        }
      ]
    }, {
      name: 'TWAMP - Local Endpoint',
      logrecords: [{
          message: 'sweden-esx-ta-1:eth1 (IPv4) - vnf-local-endpoint (ESX): Clocks at Test Agent and TWAMP reflector are not in sync, measured negative delay.',
          level: 'warning',
          start_time: 1553852072,
          end_time: null
        }, {
          message: 'sweden-esx-ta-1:eth1 (IPv4) - vnf-local-endpoint (ESX): The sender is overloaded.',
          level: 'warning',
          start_time: 1553853625,
          end_time: 1553853626
        }, {
          message: 'sweden-esx-ta-1:eth1 (IPv4) - vnf-local-endpoint (ESX): The sender is overloaded.',
          level: 'warning',
          start_time: 1553853627,
          end_time: 1553853628
        }, {
          message: 'sweden-esx-ta-1:eth1 (IPv4) - vnf-local-endpoint (ESX): The sender is overloaded.',
          level: 'warning',
          start_time: 1553853642,
          end_time: 1553853643
        }, {
          message: 'sweden-esx-ta-1:eth1 (IPv4) - vnf-local-endpoint (ESX): The sender is overloaded.',
          level: 'warning',
          start_time: 1553853645,
          end_time: 1553853646
        }, {
          message: 'sweden-esx-ta-1:eth1 (IPv4) - vnf-local-endpoint (ESX): The sender is overloaded.',
          level: 'warning',
          start_time: 1553853651,
          end_time: 1553853652
        }, {
          message: 'sweden-esx-ta-1:eth1 (IPv4) - vnf-local-endpoint (ESX): The sender is overloaded.',
          level: 'warning',
          start_time: 1553853653,
          end_time: 1553853654
        }, {
          message: 'sweden-esx-ta-1:eth1 (IPv4) - vnf-local-endpoint (ESX): The sender is overloaded.',
          level: 'warning',
          start_time: 1553853657,
          end_time: 1553853658
        }, {
          message: 'sweden-esx-ta-1:eth1 (IPv4) - vnf-local-endpoint (ESX): The sender is overloaded.',
          level: 'warning',
          start_time: 1553853659,
          end_time: 1553853660
        }, {
          message: 'sweden-esx-ta-1:eth1 (IPv4) - vnf-local-endpoint (ESX): The sender is overloaded.',
          level: 'warning',
          start_time: 1553853661,
          end_time: 1553853662
        }, {
          message: 'sweden-esx-ta-1:eth1 (IPv4) - vnf-local-endpoint (ESX): The sender is overloaded.',
          level: 'warning',
          start_time: 1553853669,
          end_time: 1553853670
        }, {
          message: 'sweden-esx-ta-1:eth1 (IPv4) - vnf-local-endpoint (ESX): The sender is overloaded.',
          level: 'warning',
          start_time: 1553853675,
          end_time: 1553853677
        }, {
          message: 'sweden-esx-ta-1:eth1 (IPv4) - vnf-local-endpoint (ESX): The sender is overloaded.',
          level: 'warning',
          start_time: 1553853675,
          end_time: 1553853674
        }, {
          message: 'sweden-esx-ta-1:eth1 (IPv4) - vnf-local-endpoint (ESX): The sender is overloaded.',
          level: 'warning',
          start_time: 1553853678,
          end_time: 1553853679
        }, {
          message: 'sweden-esx-ta-1:eth1 (IPv4) - vnf-local-endpoint (ESX): The sender is overloaded.',
          level: 'warning',
          start_time: 1553853680,
          end_time: 1553853681
        }
      ]
    }, {
      name: 'TWAMP - Gateway',
      logrecords: [{
          message: 'sweden-esx-ta-1:eth2 (IPv4) - vnf-sweden-gateway (ESX): The sender is overloaded.',
          level: 'warning',
          start_time: 1553853624,
          end_time: 1553853625
        }, {
          message: 'sweden-esx-ta-1:eth2 (IPv4) - vnf-sweden-gateway (ESX): The sender is overloaded.',
          level: 'warning',
          start_time: 1553853626,
          end_time: 1553853627
        }, {
          message: 'sweden-esx-ta-1:eth2 (IPv4) - vnf-sweden-gateway (ESX): The sender is overloaded.',
          level: 'warning',
          start_time: 1553853636,
          end_time: 1553853637
        }, {
          message: 'sweden-esx-ta-1:eth2 (IPv4) - vnf-sweden-gateway (ESX): The sender is overloaded.',
          level: 'warning',
          start_time: 1553853640,
          end_time: 1553853642
        }, {
          message: 'sweden-esx-ta-1:eth2 (IPv4) - vnf-sweden-gateway (ESX): The sender is overloaded.',
          level: 'warning',
          start_time: 1553853644,
          end_time: 1553853645
        }, {
          message: 'sweden-esx-ta-1:eth2 (IPv4) - vnf-sweden-gateway (ESX): The sender is overloaded.',
          level: 'warning',
          start_time: 1553853652,
          end_time: 1553853653
        }, {
          message: 'sweden-esx-ta-1:eth2 (IPv4) - vnf-sweden-gateway (ESX): The sender is overloaded.',
          level: 'warning',
          start_time: 1553853655,
          end_time: 1553853657
        }, {
          message: 'sweden-esx-ta-1:eth2 (IPv4) - vnf-sweden-gateway (ESX): The sender is overloaded.',
          level: 'warning',
          start_time: 1553853658,
          end_time: 1553853659
        }, {
          message: 'sweden-esx-ta-1:eth2 (IPv4) - vnf-sweden-gateway (ESX): The sender is overloaded.',
          level: 'warning',
          start_time: 1553853660,
          end_time: 1553853661
        }, {
          message: 'sweden-esx-ta-1:eth2 (IPv4) - vnf-sweden-gateway (ESX): The sender is overloaded.',
          level: 'warning',
          start_time: 1553853666,
          end_time: 1553853667
        }, {
          message: 'sweden-esx-ta-1:eth2 (IPv4) - vnf-sweden-gateway (ESX): The sender is overloaded.',
          level: 'warning',
          start_time: 1553853668,
          end_time: 1553853669
        }, {
          message: 'sweden-esx-ta-1:eth2 (IPv4) - vnf-sweden-gateway (ESX): The sender is overloaded.',
          level: 'warning',
          start_time: 1553853674,
          end_time: 1553853673
        }, {
          message: 'sweden-esx-ta-1:eth2 (IPv4) - vnf-sweden-gateway (ESX): The sender is overloaded.',
          level: 'warning',
          start_time: 1553853674,
          end_time: 1553853676
        }, {
          message: 'sweden-esx-ta-1:eth2 (IPv4) - vnf-sweden-gateway (ESX): The sender is overloaded.',
          level: 'warning',
          start_time: 1553853677,
          end_time: 1553853680
        }
      ]
    }
  ],
  tags: [],
  sla: ['sla_bad_thumb', 89.44],
  esbar: {
    graph_width: 360,
    value_min: 0.0,
    image_width: 360,
    graph_left: 0,
    known_total: 900.0,
    image_height: 10,
    es_total: 98.0,
    graph_top: 0,
    graph_start: 1553852821,
    graph_end: 1553853721,
    value_max: 1.0,
    graph_height: 10,
    image_base64: 'iVBORw0KGgoAAAANSUhEUgAAAWgAAAAKCAIAAAAWzFNnAAAABmJLR0QA/wD/AP+gvaeTAAAAVUlEQVRoge3UsQ3AIAxFQZzFwugwGXTpv5BocldRIFMYvRprNH7grf6d62COD3PHyb5WeH+mO53tCZ8AEA4gJxxATDiAmHAAMeEAYsIBxIQDiAkHENte7ApUK+pGvwAAAABJRU5ErkJggg=='
  },
  name: 'Service Chain Monitor per VNF (VMware ESX)'
}, {
  description: 'Management over WiFi\nLocation: Lulea HQ',
  created: 1542190250,
  creator: {
    id: 1,
    email: 'admin@netrounds.com'
  },
  shared_from: [],
  id: 6991,
  shared_to: false,
  running: true,
  monitoring_logs: [{
      name: 'Wi-Fi Logger',
      logrecords: [{
          message: 'BSSID: 7a:8a:20:4a:ca:cc (channel 44)',
          level: 'info',
          start_time: 1551868150,
          end_time: null
        }
      ]
    }, {
      name: 'AWS 10 pps',
      logrecords: [{
          message: 'Different NTP servers are configured for the Test Agents',
          level: 'warning',
          start_time: 1550830105,
          end_time: null
        }
      ]
    }
  ],
  tags: [{
      color: '#e01b3b',
      identifier: 'Vp',
      name: 'vpn',
      id: 2
    }
  ],
  sla: ['sla_bad_thumb', 93.1],
  esbar: {
    graph_width: 360,
    value_min: 0.0,
    image_width: 360,
    graph_left: 0,
    known_total: 880.0,
    image_height: 10,
    es_total: 87.0,
    graph_top: 0,
    graph_start: 1553852821,
    graph_end: 1553853721,
    value_max: 1.0,
    graph_height: 10,
    image_base64: 'iVBORw0KGgoAAAANSUhEUgAAAWgAAAAKCAIAAAAWzFNnAAAABmJLR0QA/wD/AP+gvaeTAAAAiklEQVRoge3UQQ6DIBAFUOjFytHxZHbX0BQbfqS791bEjAOO+ms/e/nyrO29PmYFP2racP2c3vkp7f8P6V7pfEa7nuWq/9VeV/V1WI/v684578xztOsMu3q2hZmvzHDXt73SJ/0fR0ef9yylPMJWAIIDyAkOICY4gJjgAGKCA4gJDiAmOICY4ABiL/IdNlR96il7AAAAAElFTkSuQmCC'
  },
  name: 'Office WiFi monitoring'
}, {
  description: 'Service chain provisioned in AWS us-east-1',
  created: 1541606616,
  creator: {
    id: 9,
    email: 'jonas.krogell@netrounds.com'
  },
  shared_from: [],
  id: 5160,
  shared_to: false,
  running: true,
  monitoring_logs: [{
      name: 'TWAMP - Local Endpoint',
      logrecords: [{
          message: 'aws-service-chain-ta:eth3 (IPv4) - vnf-local-endpoint: Clocks at Test Agent and TWAMP reflector are not in sync, measured negative delay.',
          level: 'warning',
          start_time: 1553852895,
          end_time: 1553852896
        }, {
          message: 'aws-service-chain-ta:eth3 (IPv4) - vnf-local-endpoint: Clocks at Test Agent and TWAMP reflector are not in sync, measured negative delay.',
          level: 'warning',
          start_time: 1553852921,
          end_time: 1553852922
        }, {
          message: 'aws-service-chain-ta:eth3 (IPv4) - vnf-local-endpoint: Clocks at Test Agent and TWAMP reflector are not in sync, measured negative delay.',
          level: 'warning',
          start_time: 1553852926,
          end_time: 1553852927
        }, {
          message: 'aws-service-chain-ta:eth3 (IPv4) - vnf-local-endpoint: Clocks at Test Agent and TWAMP reflector are not in sync, measured negative delay.',
          level: 'warning',
          start_time: 1553852930,
          end_time: 1553852931
        }, {
          message: 'aws-service-chain-ta:eth3 (IPv4) - vnf-local-endpoint: Clocks at Test Agent and TWAMP reflector are not in sync, measured negative delay.',
          level: 'warning',
          start_time: 1553852945,
          end_time: 1553852946
        }, {
          message: 'aws-service-chain-ta:eth3 (IPv4) - vnf-local-endpoint: Clocks at Test Agent and TWAMP reflector are not in sync, measured negative delay.',
          level: 'warning',
          start_time: 1553852951,
          end_time: 1553852952
        }, {
          message: 'aws-service-chain-ta:eth3 (IPv4) - vnf-local-endpoint: Clocks at Test Agent and TWAMP reflector are not in sync, measured negative delay.',
          level: 'warning',
          start_time: 1553852957,
          end_time: 1553852958
        }, {
          message: 'aws-service-chain-ta:eth3 (IPv4) - vnf-local-endpoint: Clocks at Test Agent and TWAMP reflector are not in sync, measured negative delay.',
          level: 'warning',
          start_time: 1553852961,
          end_time: 1553852964
        }, {
          message: 'aws-service-chain-ta:eth3 (IPv4) - vnf-local-endpoint: Clocks at Test Agent and TWAMP reflector are not in sync, measured negative delay.',
          level: 'warning',
          start_time: 1553852965,
          end_time: 1553852966
        }, {
          message: 'aws-service-chain-ta:eth3 (IPv4) - vnf-local-endpoint: Clocks at Test Agent and TWAMP reflector are not in sync, measured negative delay.',
          level: 'warning',
          start_time: 1553852967,
          end_time: 1553852968
        }, {
          message: 'aws-service-chain-ta:eth3 (IPv4) - vnf-local-endpoint: Clocks at Test Agent and TWAMP reflector are not in sync, measured negative delay.',
          level: 'warning',
          start_time: 1553852969,
          end_time: 1553852970
        }, {
          message: 'aws-service-chain-ta:eth3 (IPv4) - vnf-local-endpoint: Clocks at Test Agent and TWAMP reflector are not in sync, measured negative delay.',
          level: 'warning',
          start_time: 1553852971,
          end_time: 1553852973
        }, {
          message: 'aws-service-chain-ta:eth3 (IPv4) - vnf-local-endpoint: Clocks at Test Agent and TWAMP reflector are not in sync, measured negative delay.',
          level: 'warning',
          start_time: 1553852974,
          end_time: 1553852979
        }, {
          message: 'aws-service-chain-ta:eth3 (IPv4) - vnf-local-endpoint: Clocks at Test Agent and TWAMP reflector are not in sync, measured negative delay.',
          level: 'warning',
          start_time: 1553852980,
          end_time: 1553852983
        }, {
          message: 'aws-service-chain-ta:eth3 (IPv4) - vnf-local-endpoint: Clocks at Test Agent and TWAMP reflector are not in sync, measured negative delay.',
          level: 'warning',
          start_time: 1553852991,
          end_time: 1553852998
        }, {
          message: 'aws-service-chain-ta:eth3 (IPv4) - vnf-local-endpoint: Clocks at Test Agent and TWAMP reflector are not in sync, measured negative delay.',
          level: 'warning',
          start_time: 1553852991,
          end_time: 1553852990
        }, {
          message: 'aws-service-chain-ta:eth3 (IPv4) - vnf-local-endpoint: Clocks at Test Agent and TWAMP reflector are not in sync, measured negative delay.',
          level: 'warning',
          start_time: 1553852999,
          end_time: 1553853000
        }, {
          message: 'aws-service-chain-ta:eth3 (IPv4) - vnf-local-endpoint: Clocks at Test Agent and TWAMP reflector are not in sync, measured negative delay.',
          level: 'warning',
          start_time: 1553853021,
          end_time: 1553853020
        }, {
          message: 'aws-service-chain-ta:eth3 (IPv4) - vnf-local-endpoint: Clocks at Test Agent and TWAMP reflector are not in sync, measured negative delay.',
          level: 'warning',
          start_time: 1553853021,
          end_time: 1553853027
        }, {
          message: 'aws-service-chain-ta:eth3 (IPv4) - vnf-local-endpoint: Clocks at Test Agent and TWAMP reflector are not in sync, measured negative delay.',
          level: 'warning',
          start_time: 1553853030,
          end_time: 1553853032
        }, {
          message: 'aws-service-chain-ta:eth3 (IPv4) - vnf-local-endpoint: Clocks at Test Agent and TWAMP reflector are not in sync, measured negative delay.',
          level: 'warning',
          start_time: 1553853035,
          end_time: 1553853036
        }
      ]
    }
  ],
  tags: [{
      color: '#e01b3b',
      identifier: 'Vp',
      name: 'vpn',
      id: 2
    }, {
      color: '#db465f',
      identifier: 'Se',
      name: 'service_chain',
      id: 7
    }
  ],
  sla: ['sla_bad_thumb', 93.3],
  esbar: {
    graph_width: 360,
    value_min: 0.0,
    image_width: 360,
    graph_left: 0,
    known_total: 890.0,
    image_height: 10,
    es_total: 62.0,
    graph_top: 0,
    graph_start: 1553852821,
    graph_end: 1553853721,
    value_max: 1.0,
    graph_height: 10,
    image_base64: 'iVBORw0KGgoAAAANSUhEUgAAAWgAAAAKCAIAAAAWzFNnAAAABmJLR0QA/wD/AP+gvaeTAAAAWUlEQVRoge3UMQqAMBBFQdeL6dGTk8VOtPODiOhMtYGFFAmv2mgTP7DUus91YX8c5u6TPO5179VPp/n+C4CvEw4gJhxATDiAmHAAMeEAYsIBxIQDiAkHENsALDsLVHe0AuIAAAAASUVORK5CYII='
  },
  name: 'Service Chain Monitor per VNF (AWS)'
}, {
  description: 'Monitoring between office locations',
  created: 1541091034,
  creator: {
    id: 9,
    email: 'jonas.krogell@netrounds.com'
  },
  shared_from: [],
  id: 4192,
  shared_to: false,
  running: true,
  monitoring_logs: [],
  tags: [{
      color: '#e01b3b',
      identifier: 'Vp',
      name: 'vpn',
      id: 2
    }
  ],
  sla: ['sla_bad_thumb', 99.09],
  esbar: {
    graph_width: 360,
    value_min: 0.0,
    image_width: 360,
    graph_left: 0,
    known_total: 890.0,
    image_height: 10,
    es_total: 15.0,
    graph_top: 0,
    graph_start: 1553852821,
    graph_end: 1553853721,
    value_max: 1.0,
    graph_height: 10,
    image_base64: 'iVBORw0KGgoAAAANSUhEUgAAAWgAAAAKCAIAAAAWzFNnAAAABmJLR0QA/wD/AP+gvaeTAAAAaElEQVRoge3UQQqAIAAEwOpj+XR7Wd2ibi4VGsycFERXwZ3rXqdhrHM5x1tDsHT91/s8OffqrQy97jWClrv/5X3KJWe3D7vdZkufEMCfKQ4gpjiAmOIAYooDiCkOIKY4gJjiAGKKA4gd6jMbVJUs9voAAAAASUVORK5CYII='
  },
  name: 'Global L3 VPN'
}, {
  description: 'Monitoring from all locations to 3 public cloud test agents',
  created: 1542013674,
  creator: {
    id: 9,
    email: 'jonas.krogell@netrounds.com'
  },
  shared_from: [],
  id: 6408,
  shared_to: false,
  running: true,
  monitoring_logs: [{
      name: 'AWS-GCP-Azure Full-Mesh between Clouds',
      logrecords: [{
          message: 'Different NTP servers are configured for the Test Agents',
          level: 'warning',
          start_time: 1549731263,
          end_time: null
        }
      ]
    }, {
      name: 'Azure - All sites',
      logrecords: [{
          message: 'Different NTP servers are configured for the Test Agents',
          level: 'warning',
          start_time: 1550471687,
          end_time: null
        }
      ]
    }
  ],
  tags: [{
      color: '#874dd1',
      identifier: 'Pu',
      name: 'public_cloud',
      id: 6
    }
  ],
  sla: ['sla_acceptable_thumb', 99.66],
  esbar: {
    graph_width: 360,
    value_min: 0.0,
    image_width: 360,
    graph_left: 0,
    known_total: 890.0,
    image_height: 10,
    es_total: 3.0,
    graph_top: 0,
    graph_start: 1553852821,
    graph_end: 1553853721,
    value_max: 1.0,
    graph_height: 10,
    image_base64: 'iVBORw0KGgoAAAANSUhEUgAAAWgAAAAKCAIAAAAWzFNnAAAABmJLR0QA/wD/AP+gvaeTAAAAVUlEQVRoge3UMQ6AIBBFQfFienQ4GXYklL8wQpyplm6X4pXa68ELrnKPuW3+ySvcssIOv9am1/nRFsDGhAOICQcQEw4gJhxATDiAmHAAMeEAYsIBxB4ptAxUEo9OyAAAAABJRU5ErkJggg=='
  },
  name: 'Public Cloud AWS-GCP-Azure'
}, {
  description: 'Service chain provisioned in AWS us-east-1',
  created: 1541613487,
  creator: {
    id: 9,
    email: 'jonas.krogell@netrounds.com'
  },
  shared_from: [],
  id: 5176,
  shared_to: false,
  running: true,
  monitoring_logs: [],
  tags: [{
      color: '#e01b3b',
      identifier: 'Vp',
      name: 'vpn',
      id: 2
    }, {
      color: '#db465f',
      identifier: 'Se',
      name: 'service_chain',
      id: 7
    }
  ],
  sla: ['sla_good_thumb', 100.0],
  esbar: {
    graph_width: 360,
    value_min: 0.0,
    image_width: 360,
    graph_left: 0,
    known_total: 1200.0,
    image_height: 10,
    es_total: 0.0,
    graph_top: 0,
    graph_start: 1553852821,
    graph_end: 1553853721,
    value_max: 1.0,
    graph_height: 10,
    image_base64: 'iVBORw0KGgoAAAANSUhEUgAAAWgAAAAKCAIAAAAWzFNnAAAABmJLR0QA/wD/AP+gvaeTAAAARElEQVRoge3UsREAEBQFQfRf1FcZBYhehJndCi66Xqsa8LJ5O+AwbgcA/zEOIGYcQMw4gJhxADHjAGLGAcSMA4gZBxDbTxEDVLUkceUAAAAASUVORK5CYII='
  },
  name: 'Service Chain Hourly Test (AWS)'
}, {
  description: 'Monitoring of response times for www.netrounds.com',
  created: 1551350255,
  creator: {
    id: 9,
    email: 'jonas.krogell@netrounds.com'
  },
  shared_from: [],
  id: 42819,
  shared_to: false,
  running: true,
  monitoring_logs: [{
      name: 'HTTP www.netrounds.com',
      logrecords: [{
          message: 'sweden-lulea-office_wifi:wlan0 (IPv4): Connection timed out after 10006 milliseconds',
          level: 'warning',
          start_time: 1553853715,
          end_time: null
        }
      ]
    }
  ],
  tags: [],
  sla: ['sla_good_thumb', 100.0],
  esbar: {
    graph_width: 360,
    value_min: 0.0,
    image_width: 360,
    graph_left: 0,
    known_total: 880.0,
    image_height: 10,
    es_total: 0.0,
    graph_top: 0,
    graph_start: 1553852821,
    graph_end: 1553853721,
    value_max: 1.0,
    graph_height: 10,
    image_base64: 'iVBORw0KGgoAAAANSUhEUgAAAWgAAAAKCAIAAAAWzFNnAAAABmJLR0QA/wD/AP+gvaeTAAAARElEQVRoge3UoREAIBADQaD/op7KoAAGEYNgdm1M1PVa1QBO87qMhy+ATwgHEBMOICYcQEw4gJhwADHhAGLCAcSEA4ht9IoDVPOWDGYAAAAASUVORK5CYII='
  },
  name: 'Internet service'
}];

const tasks: Task[] = [{
  id: 1,
  Subject: 'Prepare 2013 Financial',
  StartDate: '2013/01/15',
  DueDate: '2013/01/31',
  Status: 'Completed',
  Priority: 'High',
  Completion: 100,
  monitor_id: 8
},
{
  id: 2, Subject: 'Prepare 3013 Marketing Plan',
  StartDate: '2013/01/01',
  DueDate: '2013/01/31',
  Status: 'Completed',
  Priority: 'High',
  Completion: 100,
  monitor_id: 5
},
{
  id: 3,
  Subject: 'Update Personnel Files',
  StartDate: '2013/02/03',
  DueDate: '2013/02/28',
  Status: 'Completed',
  Priority: 'High',
  Completion: 100,
  monitor_id: 2
},
{
  id: 4,
  Subject: 'Review Health Insurance Options Under the Affordable Care Act',
  StartDate: '2013/02/12',
  DueDate: '2013/04/25',
  Status: 'In Progress',
  Priority: 'High',
  Completion: 50,
  monitor_id: 2
},
{
  id: 5,
  Subject: 'Choose between PPO and HMO Health Plan',
  StartDate: '2013/02/15',
  DueDate: '2013/04/15',
  Status: 'In Progress', Priority: 'High',
  Completion: 75,
  monitor_id: 1
},
{
  id: 6,
  Subject: 'Google AdWords Strategy',
  StartDate: '2013/02/16',
  DueDate: '2013/02/28',
  Status: 'Completed',
  Priority: 'High',
  Completion: 100,
  monitor_id: 1
},
{
  id: 7,
  Subject: 'New Brochures',
  StartDate: '2013/02/17',
  DueDate: '2013/02/24',
  Status: 'Completed',
  Priority: 'Normal',
  Completion: 100,
  monitor_id: 1
},
{
  id: 11,
  Subject: 'Rollout of New Website and Marketing Brochures',
  StartDate: '2013/02/20',
  DueDate: '2013/02/28',
  Status: 'Completed',
  Priority: 'High',
  Completion: 100,
  monitor_id: 5
},
{
  id: 12,
  Subject: 'Update Sales Strategy Documents',
  StartDate: '2013/02/20',
  DueDate: '2013/02/22',
  Status: 'Completed',
  Priority: 'Normal',
  Completion: 100,
  monitor_id: 9
},
{
  id: 15,
  Subject: 'Review 2012 Sales Report and Approve 2013 Plans',
  StartDate: '2013/02/23',
  DueDate: '2013/02/28',
  Status: 'Completed',
  Priority: 'Normal',
  Completion: 100,
  monitor_id: 5
},
{
  id: 16,
  Subject: 'Deliver R&D Plans for 2013',
  StartDate: '2013/03/01',
  DueDate: '2013/03/10',
  Status: 'Completed',
  Priority: 'High',
  Completion: 100,
  monitor_id: 3
},
{
  id: 20,
  Subject: 'Approve Hiring of John Jeffers',
  StartDate: '2013/03/02',
  DueDate: '2013/03/12',
  Status: 'Completed',
  Priority: 'Normal',
  Completion: 100,
  monitor_id: 4
},
{
  id: 20,
  Subject: 'Approve Hiring of John Jeffers',
  StartDate: '2013/03/02',
  DueDate: '2013/03/12',
  Status: 'Completed',
  Priority: 'Normal',
  Completion: 100,
  monitor_id: 6
},
{
  id: 21,
  Subject: 'Non-Compete Agreements',
  StartDate: '2013/03/12',
  DueDate: '2013/03/14',
  Status: 'Completed',
  Priority: 'Low',
  Completion: 100,
  monitor_id: 2
},
{
  id: 22,
  Subject: 'Update NDA Agreement',
  StartDate: '2013/03/14',
  DueDate: '2013/03/16',
  Status: 'Completed',
  Priority: 'High',
  Completion: 100,
  monitor_id: 1
},
{
  id: 23,
  Subject: 'Update Employee Files with New NDA',
  StartDate: '2013/03/16',
  DueDate: '2013/03/26',
  Status: 'Need Assistance',
  Priority: 'Normal',
  Completion: 90,
  monitor_id: 4
},
{
  id: 24,
  Subject: 'Update Employee Files with New NDA',
  StartDate: '2013/03/16',
  DueDate: '2013/03/26',
  Status: 'Need Assistance',
  Priority: 'Normal',
  Completion: 90,
  monitor_id: 6
},
{
  id: 25,
  Subject: 'Sign Updated NDA',
  StartDate: '2013/03/20',
  DueDate: '2013/03/25',
  Status: 'Completed',
  Priority: 'Urgent',
  Completion: 100,
  monitor_id: 7
},
{
  id: 26,
  Subject: 'Sign Updated NDA',
  StartDate: '2013/03/20',
  DueDate: '2013/03/25',
  Status: 'Completed',
  Priority: 'Urgent',
  Completion: 100,
  monitor_id: 8
},
{
  id: 27,
  Subject: 'Sign Updated NDA',
  StartDate: '2013/03/20',
  DueDate: '2013/03/25',
  Status: 'Need Assistance',
  Priority: 'Urgent',
  Completion: 25,
  monitor_id: 9
},
{
  id: 35,
  Subject: 'Update Revenue Projections',
  StartDate: '2013/03/24',
  DueDate: '2013/04/07',
  Status: 'Completed',
  Priority: 'Normal',
  Completion: 100,
  monitor_id: 8
},
{
  id: 36,
  Subject: 'Review Revenue Projections',
  StartDate: '2013/03/25',
  DueDate: '2013/04/06',
  Status: 'Completed',
  Priority: 'High',
  Completion: 100,
  monitor_id: 9
},
{
  id: 40,
  Subject: 'Provide New Health Insurance Docs',
  StartDate: '2013/03/28',
  DueDate: '2013/04/07',
  Status: 'Completed',
  Priority: 'Normal',
  Completion: 100,
  monitor_id: 4
},
{
  id: 41,
  Subject: 'Provide New Health Insurance Docs',
  StartDate: '2013/03/28',
  DueDate: '2013/04/07',
  Status: 'Completed',
  Priority: 'Normal',
  Completion: 100,
  monitor_id: 6
},
{
  id: 50,
  Subject: 'Give Final Approval for Refunds',
  StartDate: '2013/05/05',
  DueDate: '2013/05/15',
  Status: 'Completed',
  Priority: 'Normal',
  Completion: 100,
  monitor_id: 2
},
{
  id: 52,
  Subject: 'Review Product Recall Report by Engineering Team',
  StartDate: '2013/05/17',
  DueDate: '2013/05/20',
  Status: 'Completed',
  Priority: 'High',
  Completion: 100,
  monitor_id: 1
},
{
  id: 55,
  Subject: 'Review Overtime Report',
  StartDate: '2013/06/10',
  DueDate: '2013/06/14',
  Status: 'Completed',
  Priority: 'Normal',
  Completion: 100,
  monitor_id: 7
},
{
  id: 60,
  Subject: 'Refund Request Template',
  StartDate: '2013/06/17',
  DueDate: '2014/04/01',
  Status: 'Deferred',
  Priority: 'Normal',
  Completion: 0,
  monitor_id: 9
},
{
  id: 71,
  Subject: 'Upgrade Server Hardware',
  StartDate: '2013/07/22',
  DueDate: '2013/07/31',
  Status: 'Completed',
  Priority: 'Urgent',
  Completion: 100,
  monitor_id: 7
},
{
  id: 72,
  Subject: 'Upgrade Personal Computers',
  StartDate: '2013/07/24',
  DueDate: '2014/04/30',
  Status: 'In Progress',
  Priority: 'Normal',
  Completion: 85,
  monitor_id: 7
},
{
  id: 74,
  Subject: 'Decide on Mobile Devices to Use in the Field',
  StartDate: '2013/07/30',
  DueDate: '2013/08/02',
  Status: 'Completed',
  Priority: 'High',
  Completion: 100,
  monitor_id: 3
},
{
  id: 78,
  Subject: 'Try New Touch-Enabled WinForms Apps',
  StartDate: '2013/08/11',
  DueDate: '2013/08/15',
  Status: 'Completed',
  Priority: 'Normal',
  Completion: 100,
  monitor_id: 3
},
{
  id: 81,
  Subject: 'Review Site Up-Time Report',
  StartDate: '2013/08/24',
  DueDate: '2013/08/30',
  Status: 'Completed',
  Priority: 'Urgent',
  Completion: 100,
  monitor_id: 5
},
{
  id: 99,
  Subject: 'Submit D&B Number to ISP for Credit Approval',
  StartDate: '2013/11/04',
  DueDate: '2013/11/07',
  Status: 'Completed',
  Priority: 'High',
  Completion: 100,
  monitor_id: 8
},
{
  id: 117,
  Subject: 'Approval on Converting to New HDMI Specification',
  StartDate: '2014/01/11',
  DueDate: '2014/01/31',
  Status: 'Deferred',
  Priority: 'Normal',
  Completion: 75,
  monitor_id: 3
},
{
  id: 138,
  Subject: 'Review HR Budget Company Wide',
  StartDate: '2014/03/20',
  DueDate: '2014/03/25',
  Status: 'In Progress',
  Priority: 'Normal',
  Completion: 40,
  monitor_id: 6
},
{
  id: 145,
  Subject: 'Final Budget Review',
  StartDate: '2014/03/26',
  DueDate: '2014/03/27',
  Status: 'In Progress',
  Priority: 'High',
  Completion: 25,
  monitor_id: 6
}];

@Injectable()
export class Service {
  getEnergySources(): EnergyDescription[] {
    return energySources;
  }
  getCountriesInfo() {
      const data = [];
      // const now = Date.now();
      for (let index = 0; index < 1000; index++) {
        data.push({
          timestamp: index,
          test_agent_1: Math.floor(Math.random() * 10) + 100,
          test_agent_2: Math.floor(Math.random() * 10) + 70,
          test_agent_3: Math.floor(Math.random() * 10) + 50,
          test_agent_4: Math.floor(Math.random() * 10) + 20,
          test_agent_5: Math.floor(Math.random() * 10) + 10
        });
      }
      return data;
  }
  getEmployees() {
    return monitors;
  }
  getTasks() {
      return tasks;
  }
}
