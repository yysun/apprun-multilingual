import _, { lang, setLanguage } from '../src/l10n'

describe('l10n', () => {
  it('should translated default lang', () => {
    expect(_('English')).toEqual('English')
  })

  it('should translate fr', () => {
    setLanguage('fr')
    expect(lang).toBe('fr')
    expect(_('English')).toEqual('anglais')
  })

  it('should hint missing translation', () => {
    setLanguage('fr')
    expect(_('Germen')).toEqual('Germen*')
  })

  it('should replace parameters', () => {
    setLanguage('en')
    expect(_('Hello %', 'world')).toEqual('Hello world')
    expect(_('Hello %', 'world')).toEqual('Hello world')
    expect(_('Hello % % % % %', 1, 2, 3, 4, 5)).toEqual('Hello 1 2 3 4 5')
  })

  it('should translate and replace parameters', () => {
    setLanguage('fr')
    expect(_('Welcome %', 'you')).toEqual('Welcome you*')
  })
})
