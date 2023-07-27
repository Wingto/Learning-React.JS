from ..dep.python.websockets import connect,send,recv 
import asyncio
async def hello():
    uri = "ws://localhost:8765"
    async with connect(uri) as websocket:
        name = input("What's your name? ")

        await send(name)
        print(f">>> {name}")

        greeting = await recv()
        print(f"<<< {greeting}")

if __name__ == "__main__":
    asyncio.run(hello())