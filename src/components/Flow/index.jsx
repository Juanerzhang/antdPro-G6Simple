import React, { useEffect } from 'react'
import ReactDOM from 'react-dom';
import G6 from '@antv/g6';

const data = {
  nodes: [{
    id: "1",
    label: "开始",
    type: "begin",
    type:'circle',
    size:40,
    x: 0,
    y: 50,
},{
  id: "2",
  label: "+",
  type:'diamond',
  size:40,
  x: 100,
  y: 0,
}, {
    id: "3",
    label: "同步交易数据"
}, {
    id: "4",
    label: "同步外部数据"
}, {
  id: "5",
  label: "清洗交易数据"
}, {
  id: "6",
  label: "清洗外部数据"
},{
  id: "7",
  label: "+",
  type:'diamond',
  size:40
}, {
    id: "8",
    label: "流水对账"
}, {
    id: "9",
    label: "创建数据分片"
}, {
    id: "10",
    label: "发送分片",
    type: "end"
},{
  id: "11",
  label: "",
  type:'circle',
},{
    id: "12",
    label: "检查数据分片",
    type: "end"
},{
  id: "13",
  label: "检查数据分片不合格",
  type: "end"
},{
  id: "14",
  label: "结束",
  type: "end"
}],
  edges: [{
    source: "1",
    target: "2",
}, {
    source: "2",
    target: "3",
}, {
    source: "2",
    target: "4"
}, {
    source: "3",
    target: "5"
}, {
    source: "4",
    target: "6"
}, {
    source: "5",
    target: "7"
}, {
    source: "6",
    target: "7"
}, {
  source: "7",
  target: "8"
}, {
  source: "8",
  target: "9"
}, {
  source: "9",
  target: "10"
}, {
  source: "10",
  target: "11"
}, {
  source: "11",
  target: "12"
}, {
  source: "13",
  target: "11"
}, {
  source: "13",
  target: "14"
}]
};

  /**
   * node 特殊属性
   */
   var nodeExtraAttrs = {
    begin: {
      fill: "#9FD4FB"
    },
    end: {
      fill: "#C2E999"
    }
  };
var _extends = Object.assign || function(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];
    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }
  return target;
};

const Tutorital = () => {
  const ref = React.useRef(null)
  let graph = null

  useEffect(() => {
    if(!graph) {
      // 实例化 Minimap
      const minimap = new G6.Minimap()
      // G6.registerNode("node", {
      //   drawShape: function drawShape(cfg, group) {
      //     var rect = group.addShape("rect", {
      //       attrs: _extends({
      //         x: -50,
      //         y: -20,
      //         width: 100,
      //         height: 40,
      //         radius: 4,
      //         fill: "#fff",
      //         fillOpacity: 1,
      //       })
      //     });
      //     if (cfg.name) {
      //       group.addShape('text', {
      //         attrs: {
      //           text: cfg.name,
      //           x: 0,
      //           y: 0,
      //           fill: '#00287E',
      //           fontSize: 14,
      //           textAlign: 'center',
      //           textBaseline: 'middle',
      //           fontWeight: 'bold'
      //         }
      //       });
      //     }
      //     console.log('rect',rect)
      //     return rect;
      //   },
      //   // 设置状态
      //   setState: function setState(name, value, item) {
      //     var group = item.getContainer();
      //     var shape = group.get("children")[0]; // 顺序根据 draw 时确定
    
      //     if (name === "selected") {
      //       if (value) {
      //         shape.attr("fill", "#F6C277");
      //       } else {
      //         shape.attr("fill", "#FFD591");
      //       }
      //     }
      //   },
    
      //   getAnchorPoints: function getAnchorPoints() {
      //     return [[0, 0.5], [1, 0.5]];
      //   }
      // }, "single-shape");
        /**
   * 自定义 edge 中心关系节点
   */
  G6.registerNode("statusNode", {
    drawShape: function drawShape(cfg, group) {
      var circle = group.addShape("circle", {
        attrs: {
          x: 0,
          y: 0,
          r: 6,
          fill: cfg.active ? "#AB83E4" : "#ccc"
        }
      });
      return circle;
    }
  }, "single-shape");
   /**
   * 自定义带箭头的贝塞尔曲线 edge
   */
    const width = window.innerWidth || 1200
    const height = document.getElementById('container').scrollHeight || 500;
    console.log('width',width,height)
  //  graph = new G6.Graph({
  //       container: ReactDOM.findDOMNode(ref.current),
  //       width: 1200,
  //       height: 800,
  //       modes: {
  //         default: ['drag-canvas'],
  //       },
  //       layout: {
  //         type: 'dagre',
  //         direction: 'LR',
  //       },
  //       defaultNode: {
  //         shape: 'node',
  //         labelCfg: {
  //           style: {
  //             fill: '#000000A6',
  //             fontSize: 10,
  //           },
  //         },
  //         style: {
  //           stroke: '#72CC4A',
  //           width: 150,
  //         },
  //       },
  //       defaultEdge: {
  //         shape: 'polyline',
  //       },
  //     });
  //   }
  graph = new G6.Graph({
    container: ReactDOM.findDOMNode(ref.current),
    width: 1200,
    height: 800,
    modes: {
      default: ['drag-canvas'],
    },
    layout: {
      type: 'dagre',
      direction: 'LR',
    },
    defaultNode: {
      shape: 'node',
      labelCfg: {
        style: {
          fill: '#000000A6',
          fontSize: 10,
        },
      },
      style: {
        stroke: '#72CC4A',
        width: 150,
      },
    },
    defaultEdge: {
      shape: 'polyline',
    },
  });
}
    graph.data(data)
  
    graph.render()

    graph.on('edge:click', function(evt) {
      var target = evt.target;
  
      var type = target.get('type');
      if (type === 'circle') {
        // 点击边上的circle
        alert('你点击的是边上的圆点');
      }
    });

  }, [])

  return <div id="container"><div ref={ref} ></div></div>
}

export default Tutorital
