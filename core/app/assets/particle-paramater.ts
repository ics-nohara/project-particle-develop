/**
 * Created by nyamogera on 2016/01/20.
 */

export class ParticleParamater {

  public list:Object[];

  constructor() {
    this.list = [];

    this.list.push(this.setting1);
    this.list.push(this.setting2);
    this.list.push(this.setting3);
    this.list.push(this.setting4);
  }

  setting1 = {
    name: "kirakira",
    property: {
      "bgColor": "#00000",
      "width": 500,
      "height": 500,
      "friction": "0.058",
      "startX": "252",
      "startXVariance": "0",
      "startY": "71",
      "startYVariance": "148",
      "lifeSpan": "136",
      "lifeSpanVariance": "27",
      "initialDirection": "283",
      "initialDirectionVariance": "348",
      "initialSpeed": "12.9",
      "initialSpeedVariance": "1.6",
      "accelerationSpeed": "0.7",
      "accelerationDirection": "116.5",
      "startAlpha": "1",
      "startAlphaVariance": "0",
      "finishAlpha": "0",
      "finishAlphaVariance": 0.5,
      "startScale": "0.18",
      "startScaleVariance": "1",
      "finishScale": "0",
      "finishScaleVariance": "0",
      "shapeIdList": ["blur_circle", "triangle", "circle", "reverse_blur_circle"],
      "emitFrequency": "3",
      "startColor": {
        "hue": "170",
        "hueVariance": 0,
        "satuation": 75,
        "satuationVariance": 0,
        "luminance": 75,
        "luminanceVariance": 0
      },
      "finishColor": {
        "hue": 50,
        "hueVariance": 0,
        "satuation": 75,
        "satuationVariance": 0,
        "luminance": 75,
        "luminanceVariance": 0
      }
    }
  };

  setting2 = {
    name: "igaguri",
    property: {
      "bgColor": "#00000",
      "width": 500,
      "height": 500,
      "friction": 0,
      "startX": 250,
      "startXVariance": "316",
      "startY": 250,
      "startYVariance": "296",
      "lifeSpan": "164.03",
      "lifeSpanVariance": 30,
      "initialDirection": 270,
      "initialDirectionVariance": 60,
      "initialSpeed": 0.5,
      "initialSpeedVariance": 0.5,
      "accelerationSpeed": 0,
      "accelerationDirection": 0,
      "startAlpha": "0.94",
      "startAlphaVariance": 0,
      "finishAlpha": "0.05",
      "finishAlphaVariance": "0.04",
      "startScale": "0.11",
      "startScaleVariance": 0,
      "finishScale": "2.6",
      "finishScaleVariance": 0,
      "shapeIdList": [
        "star_10"
      ],
      "emitFrequency": 1,
      "startColor": {
        "hue": "124.63",
        "hueVariance": 0,
        "satuation": 75,
        "satuationVariance": 0,
        "luminance": "88.5",
        "luminanceVariance": 0
      },
      "finishColor": {
        "hue": "269.59",
        "hueVariance": "274.8",
        "satuation": 75,
        "satuationVariance": 0,
        "luminance": 75,
        "luminanceVariance": 0
      }
    }
  };

  setting3 = {
    name: "heart",
    property: {

      "bgColor": "#00000",
      "width": 500,
      "height": "500",
      "friction": "0.021",
      "startX": "242",
      "startXVariance": "0",
      "startY": "396",
      "startYVariance": "0",
      "lifeSpan": 100,
      "lifeSpanVariance": 30,
      "initialDirection": 270,
      "initialDirectionVariance": "136.8",
      "initialSpeed": "6",
      "initialSpeedVariance": 0.5,
      "accelerationSpeed": 0,
      "accelerationDirection": 0,
      "startAlpha": 1,
      "startAlphaVariance": 0,
      "finishAlpha": "0",
      "finishAlphaVariance": "0",
      "startScale": "1.81",
      "startScaleVariance": 0,
      "finishScale": 1,
      "finishScaleVariance": 0,
      "shapeIdList": [
        "heart"
      ],
      "emitFrequency": 1,
      "startColor": {
        "hue": "355.74",
        "hueVariance": 0,
        "satuation": 75,
        "satuationVariance": 0,
        "luminance": 75,
        "luminanceVariance": 0
      },
      "finishColor": {
        "hue": "352.63",
        "hueVariance": 0,
        "satuation": 75,
        "satuationVariance": 0,
        "luminance": 75,
        "luminanceVariance": 0
      }
    }
  }
  setting4 = {
    name: "fire",
    property: {
      "bgColor": "#00000",
      "width": 500,
      "height": 500,
      "friction": "0",
      "startX": "262",
      "startXVariance": "25",
      "startY": "381",
      "startYVariance": "23",
      "lifeSpan": "113.24",
      "lifeSpanVariance": 30,
      "initialDirection": "268.2",
      "initialDirectionVariance": "0.8",
      "initialSpeed": "1.8",
      "initialSpeedVariance": "0",
      "accelerationSpeed": "0",
      "accelerationDirection": 0,
      "startAlpha": 1,
      "startAlphaVariance": 0,
      "finishAlpha": "0.13",
      "finishAlphaVariance": "0.08",
      "startScale": "0.9",
      "startScaleVariance": 0,
      "finishScale": "0.31",
      "finishScaleVariance": 0,
      "shapeIdList": [
        "circle"
      ],
      "emitFrequency": "3",
      "startColor": {
        "hue": "360",
        "hueVariance": 0,
        "satuation": "93.17",
        "satuationVariance": 0,
        "luminance": "41.49",
        "luminanceVariance": 0
      },
      "finishColor": {
        "hue": "32.07",
        "hueVariance": "3.91",
        "satuation": "17.16",
        "satuationVariance": 0,
        "luminance": "32.8",
        "luminanceVariance": 0
      }
    }
  };
}