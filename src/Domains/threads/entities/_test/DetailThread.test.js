const DetailThread = require('../DetailThread');

describe('a DetailThread entities', () => {
  it('should throw error when payload did not contain needed property', () => {
    // arrange
    const payload = {};

    // action and assert
    expect(() => new DetailThread(payload)).toThrowError('DETAIL_THREAD.NOT_CONTAIN_NEEDED_PROPERTY');
  });

  it('should throw error when payload did not meet data type specification', () => {
    // arrange
    const payload = {
      threadId: 123,
    };

    // action and assert
    expect(() => new DetailThread(payload)).toThrowError('DETAIL_THREAD.NOT_MEET_DATA_TYPE_SPECIFICATION');
  });

  it('should create PostedThread object correctly', () => {
    // arrange
    const payload = {
      threadId: 'thread-123',
    };

    // action
    const thread = new DetailThread(payload);

    // assert
    expect(thread).toBeInstanceOf(DetailThread);
    expect(thread.threadId).toEqual(payload.threadId);
  });
});
