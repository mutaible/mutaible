import Mutaible from './mutaible';

test('should initialize with default options', () => {
    const mutaible = new Mutaible();
    expect(mutaible.options).toEqual({});
});

test('should enhance SEO when option is set', () => {
    document.title = "Test";
    const mutaible = new Mutaible({ enhanceSEO: true });
    expect(document.title).toBe("Test | Enhanced for SEO");
});
