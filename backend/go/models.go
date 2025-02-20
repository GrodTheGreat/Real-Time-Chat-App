package models

import "time"

type Status struct {
	Id         int
	StatusName string
}

type ChatType struct {
	Id       int
	TypeName string
}

type User struct {
	Id             int
	Username       string
	HashedPassword string
	Salt           string
	FirstName      string
	LastName       string
	Bio            string
	Status         Status
	CreatedAt      time.Time
}

type Chat struct {
	Id        int
	Name      string
	ChatType  ChatType
	CreatedAd time.Time
}

type UserChat struct {
	Id   int
	User User
	Chat Chat
}

type Message struct {
	Id        int
	User      User
	Chat      Chat
	Body      string
	TimeStamp time.Time
}
