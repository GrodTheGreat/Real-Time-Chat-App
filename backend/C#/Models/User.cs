using System.DateTime;

namespace Models
{
    class User
    {
        public int Id { get; set; }
        public string Username { get; set; }
        public string HashedPassword { get; set; }
        public string Salt { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Bio { get; set; }
        public Status Status { get; set; }
        public DateTime CreatedAt { get; set; }
    }
}