using System.DateTime;

namespace Models
{
    class Chat
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public ChatType ChatType { get; set; }
        public DateTime CreatedAt { get; set; }
    }
}