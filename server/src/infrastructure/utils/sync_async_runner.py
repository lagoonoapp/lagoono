'''
Try to run function sync or async.
'''
import asyncio
import os

# Flag to control behavior (could also use Flask config)

async def my_async_func(x):
    await asyncio.sleep(1)
    return x * 2

def call_function(func, mode, *args, **kwargs):
    '''
    Call an async function either async or sync depending on mode.
    Supports arbitrary args and kwargs.
    Safe if an event loop is already running.
    '''
    coro = func(*args, **kwargs)
    
    if mode == 'async':
        # Just return the coroutine, caller should await it
        return coro
    else:
        try:
            # Preferred path: run synchronously
            return asyncio.run(coro)
        except RuntimeError as e:
            if 'asyncio.run() cannot be called from a running event loop' in str(e):
                # Already running loop (e.g. pytest-asyncio)
                try:
                    loop = asyncio.get_running_loop()
                except RuntimeError:
                    loop = asyncio.new_event_loop()
                    asyncio.set_event_loop(loop)
                return loop.run_until_complete(coro)
            elif 'no running event loop' in str(e):
                # Python 3.12+ case
                loop = asyncio.new_event_loop()
                asyncio.set_event_loop(loop)
                return loop.run_until_complete(coro)
            else:
                raise