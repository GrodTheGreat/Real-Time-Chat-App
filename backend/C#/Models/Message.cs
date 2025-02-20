using System.DateTime;

namespace Models
{
    class Message
    {
        public int Id { get; set; }
        public User User { get; set; }
        public Chat Chat { get; set; }
        public string Body { get; set; }
        public DateTime TimeStamp { get; set; }
    }
}