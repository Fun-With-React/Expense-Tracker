import React from 'react'

const PeopleList = () => {
const list = [
    {name:'Ben', age: 23},
    {name:'Liya', age: 44},
    {name:'John', age: 31},
    {name:'Peter', age: 29}
]
const filtered = list.filter(item=> item.age>30)
console.log(filtered);
const sorted = list.sort((a,b)=> a.age-b.age)
console.log(sorted);

const pList = sorted.map(person => {
  return (
  <li key={`${person.name} - ${Math.floor(Math.random())}`}>
    <p>Name : {person.name}</p>
    <p>Age : {person.age}</p>
</li>
)
})
  return (
    <div>
        <ul>
            {pList}
        </ul>
    </div>
  )
}

export default PeopleList