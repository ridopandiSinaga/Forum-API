const AddedThread = require('../AddedThread');

describe('a AddedThread entities', () => {
  it('should throw error when payload did not contain needed property', () => {
    // arrange
    const payload = {
      title: 'sebuah thread title',
      body: 'sebuah thread body',
    };

    // action and assert
    expect(() => new AddedThread(payload)).toThrowError('ADDED_THREAD.NOT_CONTAIN_NEEDED_PROPERTY');
  });

  it('should throw error when payload did not meet data type specification', () => {
    // arrange
    const payload = {
      id: 124,
      title: {},
      owner: 'user-123',
    };

    // action and assert
    expect(() => new AddedThread(payload)).toThrowError('ADDED_THREAD.NOT_MEET_DATA_TYPE_SPECIFICATION');
  });

  it('should create PostedThread object correctly', () => {
    // arrange
    const payload = {
      id: 'thread-123',
      title: 'sebuah thread title',
      owner: 'user-123',
    };

    // action
    const thread = new AddedThread(payload);

    // assert
    expect(thread).toBeInstanceOf(AddedThread);
    expect(thread.id).toEqual(payload.id);
    expect(thread.title).toEqual(payload.title);
    expect(thread.owner).toEqual(payload.owner);
  });
});
