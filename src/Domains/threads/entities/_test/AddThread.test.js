const AddThread = require('../AddThread');

describe('a AddThread entities', () => {
  it('should throw error when payload did not contain needed property', () => {
    // arrange
    const payload = {
      title: 'sebuah thread title',
      body: 'sebuah thread body',
    };

    // action and assert
    expect(() => new AddThread(payload)).toThrowError('ADD_THREAD.NOT_CONTAIN_NEEDED_PROPERTY');
  });

  it('should throw error when payload did not meet data type specification', () => {
    // arrange
    const payload = {
      title: true,
      body: 'sebuah thread body',
      owner: 214,
    };

    // action and assert
    expect(() => new AddThread(payload)).toThrowError('ADD_THREAD.NOT_MEET_DATA_TYPE_SPECIFICATION');
  });

  it('should create PostThread object correctly', () => {
    // arrange
    const payload = {
      title: 'sebuah thread title',
      body: 'sebuah thread body',
      owner: 'user-123',
    };

    // action
    const thread = new AddThread(payload);

    // assert
    expect(thread).toBeInstanceOf(AddThread);
    expect(thread.title).toEqual(payload.title);
    expect(thread.body).toEqual(payload.body);
    expect(thread.owner).toEqual(payload.owner);
  });
});
