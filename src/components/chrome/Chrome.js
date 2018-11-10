import React from 'react'
import PropTypes from 'prop-types'
import reactCSS from 'reactcss'

import { ColorWrap, Saturation, Hue, Alpha, Checkboard } from '../common'
import ChromeFields from './ChromeFields'
import ChromePointer from './ChromePointer'
import ChromePointerCircle from './ChromePointerCircle'

export const Chrome = ({ onChange, disableAlpha, rgb, hsl, hsv, hex, renderers,
  className = '' }) => {
  const styles = reactCSS({
    'default': {
      picker: {
        background: 'transparent',
        borderRadius: '2px',
        boxSizing: 'initial',
        width: '100%',
        fontFamily: 'Menlo',
      },
      saturation: {
        width: '90%',
        paddingBottom: '55%',
        position: 'relative',
        borderRadius: '2px 2px 0 0',
        overflow: 'hidden',
        marginLeft: 'auto',
        marginRight: 'auto',
      },
      Saturation: {
        radius: '2px 2px 0 0',
      },
      body: {
        padding: '16px 0px 12px 0px',
      },
      controls: {
        display: 'flex',
      },
      color: {
        width: '32px',
      },
      swatch: {
        marginTop: '6px',
        width: '16px',
        height: '16px',
        borderRadius: '8px',
        position: 'relative',
        overflow: 'hidden',
      },
      active: {
        absolute: '0px 0px 0px 0px',
        borderRadius: '8px',
        boxShadow: 'inset 0 0 0 1px rgba(0,0,0,.1)',
        background: `rgba(${ rgb.r }, ${ rgb.g }, ${ rgb.b }, ${ rgb.a })`,
        zIndex: '2',
      },
      toggles: {
        flex: '1',
      },
      hue: {
        height: '10px',
        position: 'relative',
        marginBottom: '8px',
      },
      Hue: {
        radius: '2px',
      },
      alpha: {
        height: '10px',
        position: 'relative',
      },
      Alpha: {
        radius: '2px',
      },
    },
    'disableAlpha': {
      color: {
        width: '22px',
      },
      alpha: {
        display: 'none',
      },
      hue: {
        marginBottom: '0px',
      },
      swatch: {
        width: '10px',
        height: '10px',
        marginTop: '0px',
      },
    },
  }, { disableAlpha })

  return (
    <div style={ styles.picker } className={ `chrome-picker ${ className }` }>
      <div style={ styles.saturation }>
        <Saturation
          style={ styles.Saturation }
          hsl={ hsl }
          hsv={ hsv }
          pointer={ ChromePointerCircle }
          onChange={ onChange }
        />
      </div>
      <div style={ styles.body }>
        <div style={ styles.controls } className="flexbox-fix">
          <div style={ styles.toggles }>
            <div style={ styles.hue }>
              <Hue
                style={ styles.Hue }
                hsl={ hsl }
                pointer={ ChromePointer }
                onChange={ onChange }
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Chrome.propTypes = {
  disableAlpha: PropTypes.bool,
}

Chrome.defaultProps = {
  disableAlpha: false,
}

export default ColorWrap(Chrome)
