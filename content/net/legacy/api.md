## Functions
### Net.CreateFunction 

```ts
function Net.CreateFunction(name: string): NetServerFunction
```
Creates a new NetServerFunction with the specified `name`.

### Net.CreateEvent 

```ts
function Net.CreateEvent(name: string): NetServerEvent
```
Creates a new NetServerEvent with the specified `name`.


### Net.Serialize
Added in 1.0.13


```ts
function Net.Serialize<T>(object: T): Serializable<T>;
```
Serializes the object.


### Net.Deserialize
Added in 1.0.13


```ts
function Deserialize<T>(object: Serializable<T>, 
			deserializer: (value: Serializable<T>) => T): T;
```
Deserializes the given serialized object using the specified deserializer

### Net.IsSerializable
Added in 1.0.13


```ts
function IsSerializable(value: unknown): boolean;
```
Checks that the object is serializable

### Net.SetConfiguration
### Net.SetClientConfiguration
### Net.GetConfiguration

## Classes

### NetServerEvent
The server version of an event.

```ts
class NetServerEvent {
	constructor(name: string);
}
```

Creation:

```ts
// OOP
const event = new Net.ServerEvent("NameHere");

// Using
const event = Net.CreateEvent("NameHere");
```

```lua
-- OOP
local event = Net.ServerEvent.new("NameHere")

-- Using CreateEvent
local event = Net.CreateEvent("NameHere")
```

### NetServerFunction
The server version of a function.

### NetServerAsyncFunction
Added in 1.2.0


### NetGlobalServerEvent
Added in 1.0.13


### NetGlobalEvent 
Added in 1.0.13



### NetClientEvent
The client version of an event.

```ts
class NetClientEvent {
	constructor(name: string);
}
```

Creation:

```ts
// OOP
const event = new Net.ClientEvent("NameHere");

// Async
const event = Net.WaitForClientEventAsync("NameHere").then(event => {
	// do stuff with 'event'
});
```

```lua
-- OOP
local event = Net.ClientEvent.new("NameHere")

-- Async
local event = Net.WaitForClientEventAsync("NameHere"):andThen(function(event)
	-- do stuff with 'event'
end)
```

### NetClientFunction
The client version of a function.

### NetClientAsyncFunction
Added in 1.2.0

