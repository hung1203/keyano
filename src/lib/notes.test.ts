import { describe, expect, it } from 'vitest'
import { isBlackKey, midiToName, midiToSolfege } from './notes'

describe('midiToName', () => {
  it('maps midi numbers to note names', () => {
    expect(midiToName(60)).toBe('C4')
    expect(midiToName(61)).toBe('C#4')
    expect(midiToName(21)).toBe('A0')
    expect(midiToName(108)).toBe('C8')
  })
})

describe('midiToSolfege', () => {
  it('maps midi numbers to solfege names', () => {
    expect(midiToSolfege(67)).toBe('Sol4')
    expect(midiToSolfege(61)).toBe('Đô#4')
  })
})

describe('isBlackKey', () => {
  it('detects black keys', () => {
    expect(isBlackKey(61)).toBe(true)
    expect(isBlackKey(64)).toBe(false)
    expect(isBlackKey(66)).toBe(true)
    expect(isBlackKey(71)).toBe(false)
  })
})
