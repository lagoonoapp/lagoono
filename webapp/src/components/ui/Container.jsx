import React from 'react';

function assignValue(value){
      if (typeof(value) == 'number'){
            return value + 'px';
      }
      return value;
}

export function Container(props) {
      let style = {
            textAlign: 'left'
      };
      const spMap = { xs: 10, sm: 12, md: 16, lg: 20, xl: 24, xxl: 30 };
      const ignoreProps = ['children', 'className', 'style', 'tabIndex'];
      const nonNumProps = {
            center: ()=>{
                  style.textAlign = 'center';
                  style.verticalAlign = 'middle';
                  //style.display = 'flex';
                  //style.flexDirection = 'column';
                  style.justifyContent = 'center';
            },
            centerH: ()=>{ 
                  style.display = 'flex';
                  style.textAlign = 'center'; 
                  style.justifyContent = 'center';
            }, 
            centerV: ()=>{ 
                  style.display = 'flex';
                  style.flexDirection = 'column';
                  style.justifyContent = 'center';
            },
            gap: (value)=>{
                  style.gap = value;
            },
            justifyContent: (value)=>{
                  style.justifyContent = value;
            }, 
            display: (value)=>{
                  style.display = value;
            },
            position: (value)=>{
                  style.position = value;
            },
            width: (value)=>{
                  style.width = value;
            },
            height: (value)=>{
                  style.height = value;
            },
            flex: ()=>{style.display = 'flex';},
            flexWrap: (value)=>{style.flexWrap = value;},
            flexV: ()=>{
                  style.display = 'flex';
                  style.flexDirection = 'column';
            },
            inline: ()=>{style.display = 'inline';},
            inlineBlock: ()=>{style.display = 'inline-block';},
            alignItems: (value)=>{
                  style.alignItems = value;
            }, // shortcut
            left: ()=>{ style.textAlign = 'left';}, 
            right: ()=>{ style.textAlign = 'right';}, 
            h100: ()=>{style.height = '100%';},
            h50: ()=>{style.height = '50%';},
            w50: ()=>{style.width = '50%';},
            w100: ()=>{style.width = '100%';},
            wAuto: ()=>{style.width = 'auto'},
            mAuto: ()=>{style.margin = 'auto';},
            mxAuto: ()=>{
                  style.marginLeft = 'auto';
                  style.marginRight = 'auto';
            },
            myAuto: ()=>{
                  style.marginTop = 'auto';
                  style.marginTop = 'auto';
            },
            scrollY: ()=>{style.overflowY = 'auto';},
            scrollX: ()=>{style.overflowX = 'auto';},
            scroll: ()=>{style.overflow = 'auto';},
            scrollYHidden: ()=>{style.overflowY = 'hidden';},
            scrollXHidden: ()=>{style.overflowX = 'hidden';},
            scrollHidden: ()=>{style.overflow = 'hidden';},
            space: (val)=>{
                  style.display = 'inline-flex';
                  style.gap = parseValue(val);
            }
      };
      const parseValue = (value)=>{
            const sizeVal = spMap[value];
            if (sizeVal != null){
                  return sizeVal + 'px';
            }
            if (typeof(value) == 'number'){
                  return value + 'px';
            } else if (typeof(value) == 'string'){
                  return value;
            }
            return '0px';
      };
      const propsMap = {
            p: ['padding'],
            pt: ['paddingTop'],
            pb: ['paddingBottom'],
            py: ['paddingTop', 'paddingBottom'],
            pl: ['paddingLeft'],
            pr: ['paddingRight'],
            px: ['paddingLeft', 'paddingRight'],

            m: ['margin'],
            mt: ['marginTop'],
            mb: ['marginBottom'],
            my: ['marginTop', 'marginBottom'],
            ml: ['marginLeft'],
            mr: ['marginRight'],
            mx: ['marginLeft', 'marginRight'],

            maxW: ['maxWidth'],
            maxH: ['maxHeight'],
            minW: ['minWidth'],
            minH: ['minHeight']
      }
      /*if (props.center){
            style.textAlign = 'center';
            style.verticalAlign = 'middle';
            style.display = 'flex';
            style.flexDirection = 'column';
            style.justifyContent = 'center';
      }
      if (props.left || props.right){
            style.textAlign = props.left ? 'left': (props.right ? 'right': 'left');
      }
      if (props.h100){
            style.height = '100%';
      }*/
      // Non-numeric properties
      /*if (props.tabIndex != null){
            debugger
      }*/
      const notNumProps = Object.entries(props).filter(([key])=>nonNumProps[key] && !ignoreProps.includes(key));
      for (const [key, value] of notNumProps){
            nonNumProps[key](value);
      }

      // Numeric properties
      const numProps = Object.entries(props).filter(([key])=>!nonNumProps[key] && !ignoreProps.includes(key));
      //console.log(numProps)
      for (const [key, value] of numProps){
            const mappedValue = propsMap[key];
            if (mappedValue){
                  mappedValue.forEach(name=>{
                        if (value == 'auto'){
                              style[name] = 'auto';
                        } else {
                              style[name] = parseValue(value);
                        }
                  });   
            }
      }
      // Other attribute properties
      let attrPropsObject = {};
      const attrProps = {
            draggable: (val)=>{ return {
                  draggable: true,
                  onDragStart: val.onDragStart }},
            droppable: (val)=>{ return {
                                    onDragOver: val.onDragOver,
                                    onDrop: val.onDrop }},
            title: (val)=>{
                  return {title: val}
            }
      };
      Object.entries(attrProps).forEach(prop=>{
            const attrKey = prop[0];
            if(props[attrKey]){
                  attrPropsObject = {...attrPropsObject, ...attrProps[attrKey](props[attrKey])};
            }
      })
      if (props.style){
            style =  {...style, ...props.style};
      }
      const className = `container ${props.className || ''}`;
      const tabIndex = props.tabIndex != null ? {tabIndex: 0}: null;
      const dataType = props['data-type'] ? {'data-type': props['data-type']}: null;
      return (<div 
                  className={className} 
                  style={style} 
                  {...attrPropsObject} {...props.eventHandlers} {...tabIndex} {...dataType}
                  id={props.id}>
                        {props.children}
            </div>);
}