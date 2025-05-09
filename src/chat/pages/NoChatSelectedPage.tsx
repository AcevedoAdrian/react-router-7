const NoChatSelectedPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <h1 className="text-2xl font-semibold">No Chat Selected</h1>
      <p className="text-lg text-muted-foreground mt-2">
        Please select a chat from the list to start messaging.
      </p>
      <p className="text-md text-muted-foreground mt-1">
        If you don't see any chats, start a new conversation!
      </p>
    </div>
  );
};

export default NoChatSelectedPage;
