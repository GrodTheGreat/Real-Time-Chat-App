namespace Models
{
    class UserChat
    {
        public int Id { get; set; }
        public User User { get; set; }
        public Chat Chat { get; set; }
    }
}